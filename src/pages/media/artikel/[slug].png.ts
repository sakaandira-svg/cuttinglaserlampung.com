import type { APIRoute } from 'astro';
import sharp from 'sharp';
import { publishedArticles } from '../../../lib/articles';
import { socialSvg } from '../../../lib/editorial-art';
export async function getStaticPaths() { return (await publishedArticles()).map(article=>({params:{slug:article.id},props:{article}})); }
export const GET: APIRoute = async ({props}) => new Response(new Uint8Array(await sharp(Buffer.from(socialSvg(props.article.data.title,props.article.data.visual))).png().toBuffer()),{headers:{'Content-Type':'image/png'}});
