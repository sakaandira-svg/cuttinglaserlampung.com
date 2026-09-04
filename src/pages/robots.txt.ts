import type { APIRoute } from 'astro';
import { siteUrl } from '../config/business';
export const GET: APIRoute = () => new Response(`User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`, { headers: { 'Content-Type': 'text/plain' } });
