import type { APIRoute } from 'astro';
import sharp from 'sharp';
import { socialSvg } from '../../lib/editorial-art';
export const GET: APIRoute = async () => new Response(new Uint8Array(await sharp(Buffer.from(socialSvg('Pola, material, dan ruang.'))).png().toBuffer()),{headers:{'Content-Type':'image/png'}});
