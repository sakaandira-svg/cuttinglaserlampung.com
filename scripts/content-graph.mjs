import {readFileSync,writeFileSync} from 'node:fs';
import {loadArticles} from './content-audit.mjs';
import {conversionBusiness} from './article-conversion.mjs';
const today=new Date().toLocaleDateString('en-CA',{timeZone:'Asia/Jakarta'}),business=conversionBusiness();
const articles=loadArticles().filter(a=>a.data.status==='published'&&!a.data.noindex&&a.data.publishedAt<=today);
const seo=JSON.parse(readFileSync('reports/SEO-GUARD.json','utf8'));
const labels={services:'Article → service',portfolio:'Article → portfolio',relatedArticles:'Article → related articles',whatsapp:'Article → WhatsApp',maps:'Article → workshop / Google Maps',workshopAddress:'Verified workshop address'};
const domain='https://cuttinglaserlampung.com',link=(path,label=path)=>`[${label}](${domain}${path})`,safe=s=>s.replaceAll('|','\\|').replaceAll('\n',' ');
const rows=Object.entries(labels).map(([key,label])=>`| ${label} | ${seo.articleConversionCoverage[key]} / ${articles.length} |`).join('\n');
let graph=`# Article content and conversion graph\n\nGenerated from the published collection and verified business configuration by npm run verify. Current library: ${articles.length} articles.\n\nPriority: **WhatsApp → relevant portfolio → relevant service → workshop / Maps → related reading**. The paired WhatsApp and Maps actions are available immediately in the reusable inline module. Related reading allows 2–5 intentional links; empty drafts are excluded.\n\n| Rendered coverage | Articles |\n|---|---:|\n${rows}\n\nWhatsApp: ${business.whatsappNumber}. Workshop: ${business.address}. Directions: [Google Maps](${business.mapsUrl}). The graph contains no email conversion relationship. Passive business contact details may remain on the Contact page or footer.\n\n`;
for(const {id,data:a} of articles){
 const related=a.relatedArticles.map(id=>link(`/artikel/${id}/`,id)).join('<br>');
 graph+=`## ${link(`/artikel/${id}/`,a.title)}\n\n| Relationship | Mapping |\n|---|---|\n| Primary intent | ${safe(a.primaryIntent)} |\n| Target keyword cluster | ${safe(a.targetKeywordCluster)} |\n| Service | ${a.relatedServices.map(s=>link(`/${s}/`,s)).join('<br>')} |\n| Portfolio category | ${link(`/portfolio/#${a.portfolioId}`,a.portfolioId)} |\n| Related articles | ${related} |\n| WhatsApp message | ${safe(a.whatsappMessage)} |\n| Workshop / Maps action | [Lihat Lokasi Workshop / Buka Google Maps](${business.mapsUrl}) — verified address in the local workshop block |\n\n`;
}
writeFileSync('reports/CONTENT-GRAPH.md',graph.trimEnd()+'\n');
console.log(`Content graph updated: ${articles.length} article intent, service, portfolio, related reading, WhatsApp and workshop mappings.`);
