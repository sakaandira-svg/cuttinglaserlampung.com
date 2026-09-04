import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { resolve, join } from 'node:path';

const root = process.cwd();
const required = ['src/config/business.ts', 'src/layouts/BaseLayout.astro', 'src/pages/robots.txt.ts', 'src/pages/sitemap.xml.ts', 'docs/OPERATOR-INPUTS.md', 'docs/HOSTINGER-DEPLOYMENT.md'];
const missing = required.filter((file) => !existsSync(resolve(root, file)));
if (missing.length) throw new Error(`Missing required files: ${missing.join(', ')}`);

const businessSource = readFileSync(resolve(root, 'src/config/business.ts'), 'utf8');
const requiredBusinessValues = [
  'whatsappNumber: \'6281273070930\'',
  'phone: \'6281273070930\'',
  'phoneDisplay: \'+62 812-7307-0930\'',
  'email: \'saka.andira@gmail.com\'',
  'mapsUrl: \'https://maps.app.goo.gl/cpJSqQ58KMznkQkb8\'',
  'googleBusinessProfileUrl: \'https://share.google/Mjbq92qzvL7z5k0n0\'',
  'Jl. Ryacudu Gg. Al Fajar',
  'Bandar Lampung',
  '35133',
  'https://www.instagram.com/kinglaserart',
  'https://www.facebook.com/kinglaserartlampung/',
  'https://www.tiktok.com/@kinglasercutting',
];
for (const value of requiredBusinessValues) {
  if (!businessSource.includes(value)) throw new Error(`Business config missing required value: ${value}`);
}
for (const placeholder of ['081273070930', '0812-7307-0930', 'Nomor WhatsApp', 'alamat workshop', 'tautan Google Maps', 'jam operasional', 'example.com', 'TODO']) {
  if (businessSource.includes(placeholder)) throw new Error(`Business config still contains placeholder or legacy value: ${placeholder}`);
}

const packageJson = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'));
for (const script of ['dev', 'build', 'verify']) if (!packageJson.scripts[script]) throw new Error(`Missing npm script: ${script}`);

console.log('Release invariants passed: verified business data, real contact values, routes, docs, and npm scripts are present.');

// Validate the rendered release, including cross-page anchors and conversion links.
const dist = resolve(root, 'dist');
function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}
const htmlFiles = walk(dist).filter((file) => file.endsWith('.html'));
const pages = new Map(htmlFiles.map((file) => [file, readFileSync(file, 'utf8')]));
const domain = 'https://cuttinglaserlampung.com';
const fail = (message) => { throw new Error(message); };
const attr = (tag, name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1];
let internalLinks = 0;
let images = 0;
let whatsappLinks = 0;
for (const [file, html] of pages) {
  if ((html.match(/<h1(?:\s|>)/g) || []).length !== 1) fail(`Expected one h1: ${file}`);
  if (!/<html\s[^>]*lang="id"/.test(html)) fail(`Missing Indonesian language: ${file}`);
  if (!/<meta name="description" content="[^"]+"/.test(html)) fail(`Missing description: ${file}`);
  if (!html.includes('id="main-content"')) fail(`Missing skip-link target: ${file}`);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  const relative = file.slice(dist.length).replaceAll('\\', '/');
  const route = relative === '/index.html' ? '/' : relative.replace(/index\.html$/, '');
  if (!file.endsWith('404.html') && canonical !== `${domain}${route}`) fail(`Incorrect canonical: ${file}`);
  if (file.endsWith('404.html') && !html.includes('content="noindex, nofollow"')) fail('404 must remain noindex');
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  if (new Set(ids).size !== ids.length) fail(`Duplicate IDs: ${file}`);
  const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)];
  for (const [, attributes, content] of scripts) {
    if (!attributes.includes('application/ld+json')) fail(`Unexpected client JavaScript: ${file}`);
    JSON.parse(content);
  }
  if (!scripts.some((script) => script[2].includes('LocalBusiness'))) fail(`Missing entity schema: ${file}`);
  for (const [tag] of html.matchAll(/<a\s[^>]*>/g)) {
    const href = attr(tag, 'href')?.replaceAll('&amp;', '&');
    if (!href) fail(`Empty link: ${file}`);
    if (attr(tag, 'target') === '_blank' && !attr(tag, 'rel')?.includes('noopener')) fail(`Unsafe external link: ${file}`);
    const url = new URL(href, `${domain}${route}`);
    if (url.hostname === 'wa.me') {
      whatsappLinks++;
      if (url.pathname !== '/6281273070930' || !url.searchParams.get('text')) fail(`Invalid WhatsApp destination: ${file}`);
    }
    if (url.origin !== domain) continue;
    const target = resolve(dist, `.${decodeURIComponent(url.pathname)}`, url.pathname.endsWith('/') ? 'index.html' : '');
    if (!existsSync(target)) fail(`Broken link ${href} in ${file}`);
    if (url.hash && !pages.get(target)?.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`)) fail(`Broken anchor ${href} in ${file}`);
    internalLinks++;
  }
  for (const [tag] of html.matchAll(/<img\s[^>]*>/g)) {
    images++;
    for (const name of ['alt', 'width', 'height', 'srcset', 'sizes', 'loading']) if (!attr(tag, name)) fail(`Image missing ${name}: ${file}`);
    const imagePath = resolve(dist, `.${attr(tag, 'src')}`);
    if (!existsSync(imagePath)) fail(`Missing image: ${imagePath}`);
    if (statSync(imagePath).size > 350 * 1024) fail(`Image exceeds 350 KiB: ${imagePath}`);
    for (const candidate of attr(tag, 'srcset').split(',')) {
      const source = candidate.trim().split(/\s+/)[0];
      if (!existsSync(resolve(dist, `.${source}`))) fail(`Missing responsive image: ${source}`);
    }
  }
}
const sitemap = readFileSync(join(dist, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (sitemapUrls.length !== htmlFiles.length - 1) fail('Sitemap must list every indexable page');
for (const url of sitemapUrls) {
  if (!url.startsWith(`${domain}/`)) fail(`Wrong sitemap domain: ${url}`);
  const pathname = new URL(url).pathname;
  if (!existsSync(resolve(dist, `.${pathname}`, 'index.html'))) fail(`Missing sitemap route: ${url}`);
}
if (!readFileSync(join(dist, 'robots.txt'), 'utf8').includes(`${domain}/sitemap.xml`)) fail('Incorrect robots sitemap');
const homepage = readFileSync(join(dist, 'index.html'), 'utf8');
if (homepage.indexOf('id="pilihan-visual"') > homepage.indexOf('id="services-title"')) fail('Gallery must precede services');
if (!homepage.includes('Ilustrasi konsep') || !readFileSync(join(dist, 'portfolio/index.html'), 'utf8').includes('Bukan foto proyek')) fail('Missing concept-image disclosure');
console.log(`Rendered release passed: ${htmlFiles.length} pages, ${internalLinks} internal links/anchors, ${whatsappLinks} WhatsApp links, ${images} responsive images; schema, canonicals, sitemap, and zero client JavaScript verified.`);
