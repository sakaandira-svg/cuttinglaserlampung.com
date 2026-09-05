import {readFileSync,readdirSync,writeFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {obsoleteEmailAction} from './article-conversion.mjs';

export function loadArticles(root=process.cwd()) {
  return readdirSync(resolve(root,'src/content/articles')).filter(f=>f.endsWith('.md')).map(file=>{
    const source=readFileSync(resolve(root,'src/content/articles',file),'utf8');
    const match=source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
    if(!match)throw new Error(`Missing JSON frontmatter: ${file}`);
    return {id:file.slice(0,-3),data:JSON.parse(match[1]),body:match[2]};
  });
}
const normalize=s=>(s||'').toLowerCase().replace(/\[[^\]]+\]\([^)]*\)/g,m=>m.match(/\[([^\]]+)\]/)[1]).replace(/[^\p{L}\p{N}\s]/gu,' ').replace(/\s+/g,' ').trim();
const tokens=s=>new Set(normalize(s).split(' ').filter(w=>w.length>3));
const similarity=(a,b)=>{const union=new Set([...a,...b]);return union.size?[...a].filter(t=>b.has(t)).length/union.size:0;};
export function validateContent(articles,serviceSlugs,today=new Date().toLocaleDateString('en-CA',{timeZone:'Asia/Jakarta'})) {
  const errors=[];const warnings=[];const published=articles.filter(a=>a.data.status==='published'&&!a.data.noindex&&a.data.publishedAt<=today);
  const allIds=new Set(articles.map(a=>a.id));const eligibleIds=new Set(published.map(a=>a.id));
  const titles=new Set(),ctas=new Set(),intents=new Set(); const metrics=[];
  for(const a of articles){
    const d=a.data;const error=m=>errors.push(`${a.id}: ${m}`);
    if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(a.id))error('Invalid slug');
    if(!['published','draft'].includes(d.status)||typeof d.noindex!=='boolean')error('Missing publication controls');
    for(const key of ['title','description','primaryIntent','targetKeywordCluster','targetUser','uniqueValue','cannibalizationRisk','takeaway','whatsappMessage']) if(typeof d[key]!=='string'||d[key].trim().length<15)error(`Missing editorial field ${key}`);
    if(obsoleteEmailAction(a.body)||Object.keys(d).some(key=>/email|mailto/i.test(key)))error('Obsolete article email CTA or metadata');
    if(d.canonical!==`https://cuttinglaserlampung.com/artikel/${a.id}/`)error('Incorrect source canonical');
    if(!/^\d{4}-\d{2}-\d{2}$/.test(d.publishedAt)||!/^\d{4}-\d{2}-\d{2}$/.test(d.updatedAt)||d.updatedAt<d.publishedAt)error('Invalid editorial dates');
    if(!eligibleIds.has(a.id))continue;
    for(const [set,value,label] of [[titles,normalize(d.title),'title'],[ctas,normalize(d.whatsappMessage),'CTA'],[intents,normalize(d.primaryIntent),'intent']]){if(set.has(value))error(`Duplicate ${label}`);set.add(value);}
    if(!Array.isArray(d.relatedServices)||d.relatedServices.length<1||d.relatedServices.length>3||d.relatedServices.some(s=>!serviceSlugs.includes(s)))error('Invalid service relationship');
    if(!['eksterior','interior','ornamen','signage','cnc','material','railing'].includes(d.portfolioId))error('Missing portfolio relationship');
    if(!Array.isArray(d.relatedArticles)||new Set(d.relatedArticles).size<2||new Set(d.relatedArticles).size!==d.relatedArticles.length||d.relatedArticles.length>5||d.relatedArticles.some(id=>id===a.id||!allIds.has(id)||!eligibleIds.has(id)))error('Invalid related reading');
    if(!d.visual?.alt||d.visual.alt.length<25||!d.visual.caption||d.visual.labels?.length!==3)error('Missing meaningful illustration metadata');
    if(/^# /m.test(a.body))error('Body must not add a second H1');
    const headings=[...a.body.matchAll(/^## (.+)$/gm)].map(m=>m[1]);
    const paragraphs=a.body.split(/\n\s*\n/).filter(p=>!p.startsWith('#')&&!p.startsWith('|')&&!/^[-\d>]/.test(p));
    const wordCount=normalize(a.body).split(' ').length;
    const aids={table:/^\|.+\|$/m.test(a.body),checklist:/^(?:- |\d+\. )/m.test(a.body),example:/contoh|bayangkan|simulasi/i.test(a.body),decision:/bandingkan|bedakan|tentukan|periksa|nilai/i.test(a.body)};
    if(wordCount<450||headings.length<4||paragraphs.length<8||Object.values(aids).filter(Boolean).length<2)error('Insufficient content/value signals; expand or refocus, do not pad');
    const incoming=published.filter(other=>other.data.relatedArticles?.includes(a.id)).map(other=>other.id);
    if(!incoming.length)warnings.push(`${a.id}: no incoming related-article relationship (hub still links it)`);
    metrics.push({id:a.id,url:d.canonical,title:d.title,cluster:d.cluster,words:wordCount,sections:headings.length,primaryIntent:d.primaryIntent,targetKeywordCluster:d.targetKeywordCluster,targetUser:d.targetUser,uniqueValue:d.uniqueValue,cannibalizationRisk:d.cannibalizationRisk,services:d.relatedServices,portfolio:`/portfolio/#${d.portfolioId}`,related:d.relatedArticles,incomingRelated:incoming.length,whatsapp:true});
  }
  for(let i=0;i<published.length;i++)for(let j=i+1;j<published.length;j++){
    const a=published[i],b=published[j];
    const headings=x=>tokens([...x.body.matchAll(/^## (.+)$/gm)].map(m=>m[1]).join(' '));
    if(similarity(headings(a),headings(b))>.72)errors.push(`Excessively similar headings: ${a.id} / ${b.id}`);
    const paras=x=>x.body.split(/\n\s*\n/).map(normalize).filter(p=>p.split(' ').length>=30);
    const pa=paras(a),pb=new Set(paras(b));const duplicates=pa.filter(p=>pb.has(p));
    if(duplicates.length>=2||duplicates.join(' ').split(' ').length>Math.min(normalize(a.body).split(' ').length,normalize(b.body).split(' ').length)*.12)errors.push(`Duplicated substantial paragraphs: ${a.id} / ${b.id}`);
  }
  return {publishedCount:published.length,draftOrExcludedCount:articles.length-published.length,errors,warnings,articles:metrics};
}
export function auditContent({write=true}={}){
  const serviceSlugs=[...readFileSync('src/data/services.ts','utf8').matchAll(/slug: '([^']+)'/g)].map(m=>m[1]);
  const report=validateContent(loadArticles(),serviceSlugs);
  if(write)writeFileSync('reports/CONTENT-QUALITY.json',JSON.stringify(report,null,2)+'\n');
  if(report.errors.length)throw new Error(report.errors.join('\n'));
  console.log(`Content quality passed: ${report.publishedCount} distinct articles; ${report.draftOrExcludedCount} excluded entries; ${report.warnings.length} review flags.`);
  return report;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url))auditContent();
