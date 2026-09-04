import type { APIRoute } from 'astro';
import { services } from '../data/services';
import { siteUrl } from '../config/business';
import { publishedArticles, articlePath } from '../lib/articles';
const urls = ['/', '/layanan/', '/portfolio/', '/kontak/', '/area-layanan/', '/panduan-file-desain-laser-cutting/', '/artikel/', ...services.map((service) => `/${service.slug}/`)];
export const GET: APIRoute = async () => {
  const articles = await publishedArticles();
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((url) => `<url><loc>${siteUrl}${url}</loc></url>`).join('')}${articles.map(a=>`<url><loc>${siteUrl}${articlePath(a.id)}</loc><lastmod>${a.data.updatedAt}</lastmod></url>`).join('')}</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
