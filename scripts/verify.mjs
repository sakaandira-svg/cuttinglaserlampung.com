import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const required = ['src/config/business.ts', 'src/layouts/BaseLayout.astro', 'src/pages/robots.txt.ts', 'src/pages/sitemap.xml.ts', 'docs/OPERATOR-INPUTS.md', 'docs/HOSTINGER-DEPLOYMENT.md'];
const missing = required.filter((file) => !existsSync(resolve(root, file)));
if (missing.length) throw new Error(`Missing required files: ${missing.join(', ')}`);

const businessSource = readFileSync(resolve(root, 'src/config/business.ts'), 'utf8');
const requiredBusinessValues = [
  'whatsappNumber: \'6281273070930\'',
  'phone: \'6281273070930\'',
  'phoneDisplay: \' +62 812-7307-0930\'',
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
