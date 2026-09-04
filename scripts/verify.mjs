import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const required = ['src/config/business.ts', 'src/layouts/BaseLayout.astro', 'src/pages/robots.txt.ts', 'src/pages/sitemap.xml.ts', 'docs/OPERATOR-INPUTS.md', 'docs/HOSTINGER-DEPLOYMENT.md'];
const missing = required.filter((file) => !existsSync(resolve(root, file)));
if (missing.length) throw new Error(`Missing required files: ${missing.join(', ')}`);
const source = readFileSync(resolve(root, 'src/config/business.ts'), 'utf8');
if (!source.includes('whatsappNumber') || !source.includes('mapsUrl')) throw new Error('Business configuration contract is incomplete');
const packageJson = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'));
for (const script of ['dev', 'build', 'verify']) if (!packageJson.scripts[script]) throw new Error(`Missing npm script: ${script}`);
console.log('Release invariants passed: configuration, routes, docs, and npm scripts are present.');
