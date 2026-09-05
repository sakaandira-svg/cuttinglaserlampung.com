import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {loadArticles} from './content-audit.mjs';
import {conversionBusiness,inspectArticleConversion} from './article-conversion.mjs';
const today=new Date().toLocaleDateString('en-CA',{timeZone:'Asia/Jakarta'});
const article=loadArticles().find(a=>a.data.status==='published'&&!a.data.noindex&&a.data.publishedAt<=today);
assert.ok(article,'A published article is needed for the rendered conversion checks');
const entity=conversionBusiness(),html=readFileSync(`dist/artikel/${article.id}/index.html`,'utf8');
const check=text=>inspectArticleConversion(text,article,entity).errors;
assert.deepEqual(check(html),[]);
const cases=[
 ['wrong WhatsApp number',s=>s.replaceAll('wa.me/'+entity.whatsappNumber,'wa.me/6200000000000')],
 ['wrong Maps destination',s=>s.replaceAll(entity.mapsUrl,'https://maps.app.goo.gl/unverified')],
 ['missing direct Maps action',s=>s.replace('data-article-maps=','data-missing-maps=')],
 ['missing workshop direction action',s=>s.replace('data-workshop-maps=','data-missing-directions=')],
 ['wrong workshop address',s=>s.replace(/(<address\b[^>]*data-workshop-address[^>]*>)[\s\S]*?<\/address>/,'$1Unverified branch</address>')],
 ['article mailto action',s=>s.replace('</main>','<a href="mail&#116;o:example@example.com">Kirim lewat email</a></main>')],
 ['non-contextual WhatsApp message',s=>s.replace(encodeURIComponent(article.data.whatsappMessage),'Halo')],
 ['removed primary conversion module',s=>s.replace('data-article-conversion=','data-missing-conversion=')],
 ['competing floating CTA',s=>s.replace('</body>','<a class="whatsapp-bar" href="https://wa.me/6281273070930">WhatsApp</a></body>')],
];
for(const [name,mutate] of cases){const changed=mutate(html);assert.notEqual(changed,html,`${name}: mutation did not apply`);assert.ok(check(changed).length,`Guard failed to reject ${name}`);}
const passiveFooter=html.replace('</footer>','<a href="mailto:business@example.com">business@example.com</a></footer>');
assert.deepEqual(check(passiveFooter),[],'Passive business contact information outside article content is allowed');
console.log(`Article conversion guards passed: ${cases.length} rejected regressions; passive footer contact information accepted.`);
