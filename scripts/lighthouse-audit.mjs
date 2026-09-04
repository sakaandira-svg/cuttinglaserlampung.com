import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import desktopConfig from 'lighthouse/core/config/desktop-config.js';
import {mkdirSync,writeFileSync} from 'node:fs';
import {resolve} from 'node:path';
const args=process.argv.slice(2);const arg=(key,fallback)=>args.find(a=>a.startsWith(`--${key}=`))?.split('=').slice(1).join('=')||fallback;
const base=arg('base','http://127.0.0.1:4323').replace(/\/$/,'');
const production=new URL(base).hostname==='cuttinglaserlampung.com';
const out=arg('out',production?'reports/LIGHTHOUSE-PRODUCTION.json':'reports/LIGHTHOUSE-LOCAL.json');
const allPaths=['/','/layanan/','/portfolio/','/kontak/','/laser-cutting-acrylic-lampung/','/pagar-laser-cutting-lampung/','/artikel/','/artikel/laser-cutting-vs-cnc-router/','/artikel/pvc-bukan-bahan-untuk-laser/','/artikel/menyiapkan-data-penawaran-fabrikasi/'];
const paths=arg('paths','').split(',').filter(Boolean);const selected=paths.length?paths:allPaths;
const devices=arg('devices','mobile,desktop').split(',');
const cache=resolve('node_modules/.cache/seo-audit');mkdirSync(cache,{recursive:true});
const profile=resolve(cache,`chrome-${Date.now()}`);mkdirSync(profile,{recursive:true});
const chrome=await chromeLauncher.launch({chromePath:process.env.CHROME_PATH||undefined,chromeFlags:['--headless=new','--disable-gpu'],userDataDir:profile,handleSIGINT:false});
const runs=[];
try{
  for(const device of devices)for(const path of selected){
    const result=await lighthouse(base+path,{port:chrome.port,logLevel:'error',output:'json',onlyCategories:['performance','accessibility','best-practices','seo']},device==='desktop'?desktopConfig:undefined);
    const {lhr}=result;
    const lcp=lhr.audits['largest-contentful-paint-element'];
    const run={path,device,time:lhr.fetchTime,version:lhr.lighthouseVersion,finalUrl:lhr.finalDisplayedUrl||lhr.finalUrl,scores:Object.fromEntries(Object.entries(lhr.categories).map(([k,v])=>[k,Math.round(v.score*100)])),metrics:Object.fromEntries(['first-contentful-paint','largest-contentful-paint','total-blocking-time','cumulative-layout-shift','speed-index'].map(k=>[k,lhr.audits[k]?.numericValue])),lcpElement:lcp?.details||null,runtimeError:lhr.runtimeError||null,warnings:lhr.runWarnings,failedAudits:Object.values(lhr.audits).filter(a=>a.score!==null&&a.score<1&&!['informative','manual','notApplicable'].includes(a.scoreDisplayMode)).map(a=>({id:a.id,score:a.score,title:a.title}))};
    runs.push(run);
    writeFileSync(resolve(cache,`${production?'production':'local'}-${device}-${path.replace(/[^a-z0-9]/g,'_')||'home'}.json`),result.report);
    writeFileSync(out,JSON.stringify({base,environment:production?'Real production URLs, headless Chrome, Lighthouse simulated throttling; not field data.':'Local static production build, headless Chrome, Lighthouse simulated throttling.',runs},null,2)+'\n');
    console.log(JSON.stringify({path,device,scores:run.scores,lcpMs:run.metrics['largest-contentful-paint'],cls:run.metrics['cumulative-layout-shift'],runtimeError:run.runtimeError}));
  }
}finally{await Promise.resolve(chrome.kill());}
if(runs.some(r=>r.runtimeError||r.scores.seo!==100||r.scores.performance<95||r.scores.accessibility<95||r.scores['best-practices']<95)){console.error('Lighthouse release gate failed; inspect full reports under node_modules/.cache/seo-audit.');process.exitCode=1;}
