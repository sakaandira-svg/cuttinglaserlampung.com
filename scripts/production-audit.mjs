import {readFileSync,writeFileSync} from 'node:fs';
import {loadArticles} from './content-audit.mjs';
import {conversionBusiness,inspectArticleConversion} from './article-conversion.mjs';
const base='https://cuttinglaserlampung.com';
const expected=JSON.parse(readFileSync('reports/SEO-GUARD.json','utf8'));
const output=process.argv.find(arg=>arg.startsWith('--out='))?.slice(6)||'reports/PRODUCTION-SEO.json';
const articleSource=loadArticles(),entity=conversionBusiness(),articleCoverage={services:0,portfolio:0,relatedArticles:0,whatsapp:0,maps:0,workshopAddress:0};
const runAt=new Date().toISOString();const errors=[];const external=[];const pages=[];const assetUrls=new Set();const assets=[];
const decode=s=>s.replace(/&#(x[0-9a-f]+|[0-9]+);/gi,(_,n)=>String.fromCodePoint(n[0].toLowerCase()==='x'?parseInt(n.slice(1),16):Number(n))).replaceAll('&amp;','&').replaceAll('&quot;','"').replaceAll('&#39;',"'");
for(const page of expected.urls){
  const started=performance.now();const response=await fetch(page.url,{headers:{'Cache-Control':'no-cache'},signal:AbortSignal.timeout(30000)});const responseMs=performance.now()-started;
  const html=await response.text();const title=decode(html.match(/<title>([^<]+)<\/title>/)?.[1]||'');
  const description=decode(html.match(/<meta name="description" content="([^"]+)"/)?.[1]||'');
  const canonical=html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  const scripts=[...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];let schemaValid=true;try{scripts.forEach(s=>JSON.parse(s[1]));}catch{schemaValid=false;}
  const robots=response.headers.get('x-robots-tag');const article=Boolean(html.match(/data-article="[^"]+"/));
  const maps=html.includes('https://maps.app.goo.gl/cpJSqQ58KMznkQkb8');
  const wa=html.includes('https://wa.me/6281273070930?text=');
  if(page.article){const source=articleSource.find(a=>a.data.canonical===page.url);if(source){const conversion=inspectArticleConversion(html,source,entity);for(const message of conversion.errors)errors.push(`${page.url}: ${message}`);for(const [key,ok] of Object.entries(conversion.coverage))if(ok)articleCoverage[key]++;}else errors.push(`${page.url}: missing source conversion mapping`);}
  const ogImage=html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
  if(ogImage)assetUrls.add(ogImage);else errors.push(`${page.url}: missing OG image`);
  for(const match of html.matchAll(/<link\b[^>]*rel="stylesheet"[^>]*href="([^"]+)"/g))assetUrls.add(new URL(match[1],page.url).href);
  const checks={status:response.status===200,https:response.url.startsWith('https://'),title:title===page.title,description:description===page.description,canonical:canonical===page.url,indexable:!robots?.includes('noindex')&&!/<meta name="robots" content="[^"]*noindex/.test(html),schema:schemaValid&&scripts.length>0,article:article===page.article,maps,whatsapp:wa};
  for(const [key,ok] of Object.entries(checks))if(!ok)errors.push(`${page.url}: ${key} failed`);
  pages.push({url:page.url,status:response.status,responseMs:Math.round(responseMs),encoding:response.headers.get('content-encoding'),xRobots:robots,checks});
}
for(const url of assetUrls){
  const response=await fetch(url,{signal:AbortSignal.timeout(30000)});const body=new Uint8Array(await response.arrayBuffer());
  const type=response.headers.get('content-type');const isPng=url.endsWith('.png');
  const valid=response.status===200&&(isPng?type?.includes('image/png')&&body[0]===137&&body[1]===80:type?.includes('text/css'));
  if(!valid)errors.push(`${url}: production asset failed`);
  assets.push({url,status:response.status,type,bytes:body.length,encoding:response.headers.get('content-encoding'),cacheControl:response.headers.get('cache-control'),valid});
}
const sitemapResponse=await fetch(base+'/sitemap.xml');const sitemap=await sitemapResponse.text();const sitemapUrls=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);
if(sitemapResponse.status!==200||sitemapUrls.length!==expected.urls.length||expected.urls.some(p=>!sitemapUrls.includes(p.url)))errors.push('Production sitemap differs from verified release');
const robotsResponse=await fetch(base+'/robots.txt');const robotsText=await robotsResponse.text();if(robotsResponse.status!==200||!robotsText.includes('Sitemap: '+base+'/sitemap.xml')||/Disallow:\s*\/\s*(?:\n|$)/.test(robotsText))errors.push('Production robots mismatch');
const missing=await fetch(base+'/round5-deliberately-missing-page/',{redirect:'manual'});if(missing.status!==404)errors.push('Missing URL is not HTTP 404');
const http=await fetch('http://cuttinglaserlampung.com/',{redirect:'manual'});if(![301,308].includes(http.status)||http.headers.get('location')!==base+'/')errors.push('HTTP to HTTPS redirect incorrect');
const www=await fetch('https://www.cuttinglaserlampung.com/',{redirect:'manual'});if(![301,308].includes(www.status)||www.headers.get('location')!==base+'/'){external.push(`www is HTTP ${www.status}; host must configure a permanent www-to-apex redirect. Repository .htaccess rule was delivered; this hosting path may not execute it.`);const wwwHtml=await www.text();if(www.status===200&&!wwwHtml.includes('rel="canonical" href="'+base+'/"'))errors.push('www lacks apex canonical');}
const report={runAt,checkedUrls:pages.length,articleConversionCoverage:articleCoverage,errors,externalActions:external,sitemap:{status:sitemapResponse.status,urls:sitemapUrls.length},robots:{status:robotsResponse.status},missingStatus:missing.status,httpRedirect:{status:http.status,location:http.headers.get('location')},www:{status:www.status,location:www.headers.get('location')},assets,pages};
writeFileSync(output,JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({...report,pages:undefined,assets:assets.length},null,2));if(errors.length)process.exitCode=1;
