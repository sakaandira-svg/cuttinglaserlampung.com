import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {loadArticles,validateContent} from './content-audit.mjs';
const today=new Date().toLocaleDateString('en-CA',{timeZone:'Asia/Jakarta'});
const original=loadArticles().filter(a=>a.data.status==='published'&&!a.data.noindex&&a.data.publishedAt<=today);const services=[...readFileSync('src/data/services.ts','utf8').matchAll(/slug: '([^']+)'/g)].map(m=>m[1]);
const run=entries=>validateContent(entries,services,today);
assert.equal(run(original).errors.length,0);
const failures=[
 ['duplicate titles',a=>{a[1].data.title=a[0].data.title;}],
 ['missing service relationship',a=>{a[0].data.relatedServices=[];}],
 ['unknown related article',a=>{a[0].data.relatedArticles=['does-not-exist','also-missing'];}],
 ['duplicate CTA',a=>{a[1].data.whatsappMessage=a[0].data.whatsappMessage;}],
 ['reused article body',a=>{a[1].body=a[0].body;}],
 ['thin empty body',a=>{a[0].body='## Ringkasan\nSatu paragraf pendek.';}],
 ['wrong canonical',a=>{a[0].data.canonical='https://example.com/';}],
 ['second H1',a=>{a[0].body='# Extra title\n'+a[0].body;}],
];
for(const [label,mutate] of failures){const fixture=structuredClone(original);mutate(fixture);assert.ok(run(fixture).errors.length,`Guard failed to reject ${label}`);}
for(const kind of ['draft','future','noindex']){const fixture=structuredClone(original);const extra=structuredClone(original[0]);extra.id=`excluded-${kind}`;extra.data.canonical=`https://cuttinglaserlampung.com/artikel/${extra.id}/`;if(kind==='draft')extra.data.status='draft';if(kind==='noindex')extra.data.noindex=true;if(kind==='future')extra.data.publishedAt=extra.data.updatedAt='2099-01-01';fixture.push(extra);const result=run(fixture);assert.equal(result.publishedCount,original.length);assert.equal(result.draftOrExcludedCount,1);assert.equal(result.errors.length,0);}
console.log('Content guard regressions passed: 8 rejected failure cases; draft, future, and noindex exclusions verified.');
