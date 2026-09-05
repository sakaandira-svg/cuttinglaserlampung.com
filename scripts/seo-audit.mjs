import {readFileSync,readdirSync,existsSync,writeFileSync} from 'node:fs';
import {resolve,join} from 'node:path';
import {auditContent,loadArticles} from './content-audit.mjs';
import {conversionBusiness,inspectArticleConversion} from './article-conversion.mjs';
const root=process.cwd(),dist=resolve(root,'dist'),domain='https://cuttinglaserlampung.com';
const walk=d=>readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(join(d,e.name)):[join(d,e.name)]);
const decode=s=>s.replace(/&#(x[0-9a-f]+|[0-9]+);/gi,(_,n)=>String.fromCodePoint(n[0].toLowerCase()==='x'?parseInt(n.slice(1),16):Number(n))).replaceAll('&amp;','&').replaceAll('&#39;',"'").replaceAll('&quot;','"').replaceAll('&lt;','<').replaceAll('&gt;','>');
const attr=(tag,key)=>tag.match(new RegExp(`\\s${key}="([^"]*)"`))?.[1];
const errors=[];const records=[];const source=loadArticles();
const content=auditContent();
const conversionEntity=conversionBusiness(),conversionCoverage={services:0,portfolio:0,relatedArticles:0,whatsapp:0,maps:0,workshopAddress:0};
for(const file of walk(dist).filter(f=>f.endsWith('.html'))){
  const html=readFileSync(file,'utf8');const route=file.slice(dist.length).replaceAll('\\','/').replace(/index\.html$/,'');
  const meta=(key,value)=>[...html.matchAll(/<meta\b[^>]*>/g)].map(m=>m[0]).find(t=>attr(t,key)===value);
  const title=decode(html.match(/<title>([^<]+)<\/title>/)?.[1]||'');
  const description=decode(attr(meta('name','description')||'','content')||'');
  const canonicals=[...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*>/g)].map(m=>attr(m[0],'href'));
  const noindex=/noindex/.test(attr(meta('name','robots')||'','content')||'');
  const canonical=canonicals[0];const fail=m=>errors.push(`${route}: ${m}`);
  if(!title||!description)fail('Missing title/description');
  if(canonicals.length!==1||canonical!==`${domain}${route}`)fail('Canonical mismatch or duplicate');
  if((html.match(/<h1(?:\s|>)/g)||[]).length!==1)fail('Expected exactly one H1');
  for(const [name,expected] of [['og:title',title],['og:description',description],['og:url',canonical]])if(decode(attr(meta('property',name)||'','content')||'')!==expected)fail(`${name} mismatch`);
  const ogImage=attr(meta('property','og:image')||'','content');
  if(!ogImage||!ogImage.startsWith(domain+'/media/')||!existsSync(resolve(dist,'.'+new URL(ogImage).pathname)))fail('Missing social image');
  const scripts=[...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m=>{try{return JSON.parse(m[1])}catch{fail('Invalid JSON-LD');return {}}});
  const nodes=scripts.flatMap(s=>s['@graph']||[s]);
  if(nodes.some(n=>n.potentialAction?.['@type']==='SearchAction'))fail('Unimplemented search schema');
  if(!nodes.some(n=>n['@id']===domain+'/#localbusiness'))fail('Missing business identity');
  const links=[...html.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>/g)].map(m=>new URL(decode(m[1]),domain+route));
  const articleId=html.match(/data-article="([^"]+)"/)?.[1];
  if(articleId){
    const article=source.find(a=>a.id===articleId),data=article?.data;
    if(article){const conversion=inspectArticleConversion(html,article,conversionEntity);conversion.errors.forEach(fail);for(const [key,ok] of Object.entries(conversion.coverage))if(ok)conversionCoverage[key]++;}
    if(!data||noindex||data.status!=='published'||data.noindex)fail('Ineligible article rendered');
    const node=nodes.find(n=>n['@type']==='Article');
    if(!node||node.headline!==data?.title||node.description!==description||node.author?.['@id']!==domain+'/#organization'||node.publisher?.['@id']!==domain+'/#organization'||!node.image?.includes(ogImage))fail('Article schema mismatch');
    if(!node?.datePublished?.startsWith(data?.publishedAt||'invalid')||!node?.dateModified?.startsWith(data?.updatedAt||'invalid'))fail('Article dates mismatch');
    if(!nodes.some(n=>n['@type']==='BreadcrumbList'&&n.itemListElement.some(i=>i.item===domain+'/artikel/')))fail('Missing article breadcrumb schema');
    for(const s of data?.relatedServices||[])if(!html.includes(`data-related-service="${s}"`))fail(`Missing mapped service ${s}`);
    if(!html.includes(`data-related-portfolio="${data?.portfolioId}"`))fail('Missing mapped portfolio');
    if(!html.includes(`data-article-whatsapp="${articleId}"`)||!links.some(u=>u.hostname==='wa.me'&&u.pathname==='/6281273070930'&&u.searchParams.get('text')===data?.whatsappMessage))fail('Missing contextual WhatsApp');
    for(const id of data?.relatedArticles||[])if(!links.some(u=>u.origin===domain&&u.pathname===`/artikel/${id}/`))fail(`Missing related article ${id}`);
    if(!html.includes('class="article-prose"')||!html.includes('role="img"'))fail('Missing article body or visual');
  }
  records.push({route,title,description,canonical,noindex,articleId,links:links.filter(u=>u.origin===domain).map(u=>u.pathname)});
}
const eligible=records.filter(r=>!r.noindex);const duplicateCounts={titles:0,descriptions:0,canonicals:0};
for(const [field,count] of [['title','titles'],['description','descriptions'],['canonical','canonicals']]){const seen=new Set();for(const r of eligible){if(seen.has(r[field])){duplicateCounts[count]++;errors.push(`Duplicate ${field}: ${r.route}`)}seen.add(r[field]);}}
const sitemap=readFileSync(join(dist,'sitemap.xml'),'utf8');const urls=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>decode(m[1]));
if(new Set(urls).size!==urls.length)errors.push('Duplicate sitemap URL');
for(const url of urls)if(!eligible.some(r=>r.canonical===url))errors.push(`Ineligible sitemap URL ${url}`);
for(const r of eligible)if(!urls.includes(r.canonical))errors.push(`Missing sitemap URL ${r.route}`);
for(const a of source.filter(a=>!content.articles.some(p=>p.id===a.id)))if(records.some(r=>r.articleId===a.id)||urls.includes(a.data.canonical))errors.push(`Draft, future, or noindex article exposed: ${a.id}`);
const visited=new Set(['/']);let pending=['/'];while(pending.length){const next=[];for(const path of pending)for(const link of records.find(r=>r.route===path)?.links||[])if(!visited.has(link)){visited.add(link);next.push(link)}pending=next;}
const orphans=eligible.filter(r=>!visited.has(r.route));for(const r of orphans)errors.push(`Orphan URL ${r.route}`);
const report={indexableUrls:eligible.length,htmlPages:records.length,commercialPages:9,publishedArticles:content.publishedCount,articleConversionCoverage:conversionCoverage,orphanUrls:orphans.length,duplicateTitles:duplicateCounts.titles,duplicateDescriptions:duplicateCounts.descriptions,duplicateCanonicals:duplicateCounts.canonicals,canonicalErrors:errors.filter(e=>/canonical/i.test(e)).length,schemaErrors:errors.filter(e=>/schema|JSON-LD/i.test(e)).length,sitemapErrors:errors.filter(e=>/sitemap/i.test(e)).length,errors,urls:eligible.map(r=>({url:r.canonical,title:r.title,description:r.description,article:Boolean(r.articleId)}))};
writeFileSync('reports/SEO-GUARD.json',JSON.stringify(report,null,2)+'\n');
if(errors.length)throw new Error(errors.join('\n'));
console.log(`SEO guard passed: ${eligible.length} indexable URLs; ${content.publishedCount} articles; zero metadata duplicates, orphans, canonical/schema/sitemap errors.`);
