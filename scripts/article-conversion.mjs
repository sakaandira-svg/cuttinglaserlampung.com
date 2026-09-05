import {readFileSync} from 'node:fs';

export function conversionBusiness() {
  const source=readFileSync('src/config/business.ts','utf8');
  return Object.fromEntries(['brandName','whatsappNumber','mapsUrl','address'].map(key=>{
    const value=source.match(new RegExp(`\\b${key}: '([^']+)'`))?.[1];
    if(!value)throw new Error(`Cannot read verified business string: ${key}`);
    return [key,value];
  }));
}
export const decodeHtml=text=>text.replace(/&#(x[0-9a-f]+|[0-9]+);/gi,(_,n)=>String.fromCodePoint(n[0].toLowerCase()==='x'?parseInt(n.slice(1),16):Number(n))).replaceAll('&amp;','&').replaceAll('&quot;','"').replaceAll('&#39;',"'");
const attr=(tag,key)=>tag.match(new RegExp(`\\s${key}="([^"]*)"`))?.[1];
const plain=text=>decodeHtml(text).replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
export const obsoleteEmailAction=text=>/mailto\s*:|kirim\s+(?:lewat|via|melalui)\s+email|email\s+kami/i.test(decodeHtml(text));

export function inspectArticleConversion(html,article,business=conversionBusiness()) {
  const {id,data}=article,errors=[];
  const main=html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1]||'';
  const sections=[...main.matchAll(/<section\b[^>]*data-article-conversion="([^"]+)"[^>]*>([\s\S]*?)<\/section>/g)];
  const module=sections.find(m=>m[1]===id)?.[2]||'';
  const anchors=[...module.matchAll(/<a\b[^>]*>/g)].map(m=>m[0]);
  const links=anchors.map(a=>decodeHtml(attr(a,'href')||''));
  const whatsapp=anchors.find(a=>attr(a,'data-article-whatsapp')===id);
  const maps=anchors.find(a=>attr(a,'data-article-maps')===id);
  const directions=anchors.find(a=>attr(a,'data-workshop-maps')===id);
  const expectedWhatsApp=`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(data.whatsappMessage)}`;
  const mainLinks=[...main.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map(m=>decodeHtml(m[1]));
  const coverage={
    services:data.relatedServices?.length>0&&data.relatedServices.every(s=>anchors.some(a=>attr(a,'data-related-service')===s&&attr(a,'href')===`/${s}/`)),
    portfolio:module.includes(`data-related-portfolio="${data.portfolioId}"`)&&links.includes(`/portfolio/#${data.portfolioId}`),
    relatedArticles:data.relatedArticles?.length>=2&&data.relatedArticles.length<=5&&data.relatedArticles.every(id=>mainLinks.includes(`/artikel/${id}/`)),
    whatsapp:Boolean(whatsapp)&&decodeHtml(attr(whatsapp,'href')||'')===expectedWhatsApp,
    maps:Boolean(maps)&&attr(maps,'href')===business.mapsUrl&&Boolean(directions)&&attr(directions,'href')===business.mapsUrl,
    workshopAddress:plain(module.match(/<address\b[^>]*data-workshop-address[^>]*>([\s\S]*?)<\/address>/)?.[1]||'')===business.address,
  };
  if(sections.length!==1||!module)errors.push('Expected one reusable article conversion module');
  if(!whatsapp||anchors[0]!==whatsapp)errors.push('Contextual WhatsApp must be the first module action');
  if(!maps||anchors[1]!==maps)errors.push('Direct workshop Maps action must follow WhatsApp');
  if(obsoleteEmailAction(main))errors.push('Obsolete article email conversion action');
  if(/class="whatsapp-bar"/.test(html))errors.push('Article floating CTA can cover content; use inline conversion actions');
  for(const [key,valid] of Object.entries(coverage))if(!valid)errors.push(`Missing or invalid article conversion: ${key}`);
  for(const href of mainLinks){
    if(/^https?:\/\/wa\.me\//i.test(href)&&(!href.startsWith(`https://wa.me/${business.whatsappNumber}?`)||!new URL(href).searchParams.get('text')))errors.push('Wrong article WhatsApp destination or empty message');
  }
  return {errors,coverage,whatsappUrl:expectedWhatsApp,mapsUrl:business.mapsUrl};
}
