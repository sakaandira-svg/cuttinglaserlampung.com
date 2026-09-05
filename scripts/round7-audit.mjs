import {readFileSync,writeFileSync,existsSync,statSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {loadArticles} from './content-audit.mjs';
import {obsoleteEmailAction} from './article-conversion.mjs';
const readJson=path=>JSON.parse(readFileSync(path,'utf8'));
export const baseline=readJson('scripts/fixtures/round6-article-ids.json');
export const topics=readJson('src/data/editorial-topics.json');
export function validateRound7(articles,images,today=new Date().toLocaleDateString('en-CA',{timeZone:'Asia/Jakarta'})){
 const errors=[],published=articles.filter(a=>a.data.status==='published'&&!a.data.noindex&&a.data.publishedAt<=today);
 const ids=new Set(published.map(a=>a.id)),newArticles=published.filter(a=>!baseline.includes(a.id));
 const clusters=topics.map(t=>({id:t.id,label:t.label,existing:published.filter(a=>a.data.topic===t.id&&baseline.includes(a.id)).length,new:newArticles.filter(a=>a.data.topic===t.id).length,total:published.filter(a=>a.data.topic===t.id).length}));
 if(baseline.length!==24||new Set(baseline).size!==24)errors.push('Round 6 baseline must contain 24 distinct IDs');
 if(baseline.some(id=>!ids.has(id)))errors.push('Existing Round 6 article missing or excluded');
 if(newArticles.length<50)errors.push('NEW_ARTICLE_COUNT must be >= 50');
 if(published.length<74)errors.push('FINAL_ARTICLE_COUNT must be >= 74');
 for(const c of clusters)if(c.new<3)errors.push(c.id+': fewer than three new articles');
 const layouts={};const sources=new Set();
 for(const {id,data:d} of published){
  const fail=m=>errors.push(id+': '+m);
  if(!topics.some(t=>t.id===d.topic))fail('Invalid topic');
  if(!['field-guide','comparison','design-study','checklist'].includes(d.layout))fail('Invalid editorial layout');
  layouts[d.layout]=(layouts[d.layout]||0)+1;
  if(!baseline.includes(id)&&d.release!=='round7')fail('New article missing release marker');
  if(typeof d.workshopRelevance!=='string'||d.workshopRelevance.trim().length<30)fail('Missing workshop relevance');
  const v=images[id];if(!v){fail('Missing centralized primary visual');continue;}
  if(!/^\/media\/articles\/[a-z0-9-]+\.(svg|webp|avif|jpg|jpeg|png)$/.test(v.src))fail('Invalid primary visual path');
  if(sources.has(v.src))fail('Primary visual reused by another article');sources.add(v.src);
  if(!Number.isInteger(v.width)||!Number.isInteger(v.height)||v.width<1||v.height<1)fail('Invalid visual dimensions');
  if(typeof v.alt!=='string'||v.alt.trim().length<25||!v.caption||!v.suggestedPhoto)fail('Incomplete visual editorial metadata');
  if(!['concept','photo'].includes(v.kind))fail('Invalid visual kind');
  if(v.kind==='photo'&&(v.permissionConfirmed!==true||!v.provenance||v.provenance.includes('not customer project')))fail('Photo requires confirmed permission and truthful provenance');
 }
 if(Object.keys(layouts).length!==4)errors.push('Expected four used editorial layouts');
 return {existingArticleCount:baseline.filter(id=>ids.has(id)).length,newArticleCount:newArticles.length,finalArticleCount:published.length,clusters,layouts,primaryVisualCount:published.filter(a=>images[a.id]).length,newPrimaryVisualCount:newArticles.filter(a=>images[a.id]).length,errors};
}
export function inspectPrimaryVisual(html,id,visual){
 const errors=[];const figure=[...html.matchAll(/<figure\b[^>]*>[\s\S]*?<\/figure>/g)].map(m=>m[0]).find(s=>s.includes('data-article-visual="'+id+'"'));
 if(!figure){errors.push('Missing primary visual markup');return errors;}
 if(!figure.includes('src="'+visual.src+'"')||!figure.includes('data-visual-kind="'+visual.kind+'"'))errors.push('Primary visual does not match manifest');
 if(visual.kind==='concept'&&!figure.includes('Ilustrasi editorial; bukan foto proyek'))errors.push('Missing concept disclosure');
 return errors;
}
export function auditRound7(){
 const articles=loadArticles(),images=readJson('src/data/article-images.json'),report=validateRound7(articles,images);
 const hub=readFileSync('dist/artikel/index.html','utf8'),hashes=new Set();
 report.articleEmailCtaCount=0;
 for(const {id,data:d} of articles.filter(a=>a.data.status==='published'&&!a.data.noindex)){
  const v=images[id];if(!v)continue;
  if(!hub.includes('href="/artikel/'+id+'/"'))report.errors.push(id+': missing crawlable hub link');
  const path=resolve('public','.'+v.src);
  if(!path.startsWith(resolve('public/media/articles'))||!existsSync(path)){report.errors.push(id+': missing visual file');continue;}
  if(statSync(path).size>350*1024)report.errors.push(id+': visual exceeds 350 KiB');
  const bytes=readFileSync(path),hash=createHash('sha256').update(bytes).digest('hex');
  if(hashes.has(hash))report.errors.push(id+': duplicate primary visual bytes');hashes.add(hash);
  if(v.src.endsWith('.svg')&&(!bytes.toString().includes('<title')||!bytes.toString().includes('<desc')))report.errors.push(id+': unlabeled SVG');
  const htmlPath='dist/artikel/'+id+'/index.html';
  if(!existsSync(htmlPath)){report.errors.push(id+': missing rendered page');continue;}
  const html=readFileSync(htmlPath,'utf8');
  if(obsoleteEmailAction(html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1]||'')){report.articleEmailCtaCount++;report.errors.push(id+': forbidden email conversion');}
  report.errors.push(...inspectPrimaryVisual(html,id,v).map(e=>id+': '+e));
  if(!html.includes('data-layout="'+d.layout+'"')||!html.includes('data-topic="'+d.topic+'"'))report.errors.push(id+': incorrect rendered editorial variant');
 }
 for(const t of topics)if(!hub.includes('id="'+t.id+'"'))report.errors.push(t.id+': missing topic anchor');
 const redirects=readFileSync('public/_redirects','utf8'),apache=readFileSync('public/.htaccess','utf8');
 if(!redirects.includes('/produk-laser-cutting /portfolio/ 301')||!apache.includes('RewriteRule ^produk-laser-cutting/?$ https://cuttinglaserlampung.com/portfolio/ [R=301,L,NE]'))report.errors.push('Missing explicit legacy 301 configuration');
 report.visualBytes=Object.values(images).reduce((sum,v)=>sum+(existsSync(resolve('public','.'+v.src))?statSync(resolve('public','.'+v.src)).size:0),0);
 writeFileSync('reports/ROUND-7-GUARD.json',JSON.stringify(report,null,2)+'\n');
 if(report.errors.length)throw new Error(report.errors.join('\n'));
 console.log('Round 7 guard passed: '+report.existingArticleCount+' existing + '+report.newArticleCount+' new = '+report.finalArticleCount+'; 16 topics, four layouts, complete unique primary visuals.');
 return report;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url))auditRound7();
