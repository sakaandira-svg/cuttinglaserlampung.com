import type { APIRoute } from 'astro';
import { socialPng } from '../../lib/social-image';
import { defaultSocialSlug } from '../../lib/social-paths';
export function getStaticPaths() { return [{params:{slug:defaultSocialSlug}}]; }
export const GET: APIRoute = async () => new Response(await socialPng('Pola, material, dan ruang.'),{headers:{'Content-Type':'image/png'}});
