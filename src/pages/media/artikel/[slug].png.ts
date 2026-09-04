import type { APIRoute } from 'astro';
import { publishedArticles } from '../../../lib/articles';
import { socialPng } from '../../../lib/social-image';
import { articleSocialSlug } from '../../../lib/social-paths';
export async function getStaticPaths() { return (await publishedArticles()).map(article=>({params:{slug:articleSocialSlug(article.id)},props:{article}})); }
export const GET: APIRoute = async ({props}) => new Response(await socialPng(props.article.data.title,props.article.data.visual),{headers:{'Content-Type':'image/png'}});
