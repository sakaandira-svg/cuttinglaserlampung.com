import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string().min(20), description: z.string().min(60).max(190),
    publishedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    status: z.enum(['published', 'draft']), noindex: z.boolean(), canonical: z.string().url(),
    cluster: z.enum(['proses', 'material', 'aplikasi', 'perencanaan']),
    topic: z.enum(['fundamental','plat-besi','stainless','acrylic','acp','mdf-hmr','spons','cnc','pagar','fasad','interior','railing','ornamen','signage','perencanaan','lampung']),
    layout: z.enum(['field-guide','comparison','design-study','checklist']),
    release: z.enum(['round5','round7']).default('round5'),
    workshopRelevance: z.string().min(30),
    primaryIntent: z.string().min(20), targetKeywordCluster: z.string().min(15), targetUser: z.string().min(10), uniqueValue: z.string().min(30), cannibalizationRisk: z.string().min(20),
    relatedServices: z.array(z.string()).min(1).max(3), relatedArticles: z.array(z.string()).min(2).max(5),
    portfolioId: z.enum(['eksterior','interior','ornamen','signage','cnc','material','railing']),
    whatsappMessage: z.string().min(60), takeaway: z.string().min(40),
    visual: z.object({ type: z.enum(['path','layers','screen','plan','letters','sample']), labels: z.array(z.string()).length(3), alt: z.string().min(25), caption: z.string().min(20) }),
    sources: z.array(z.object({ label: z.string(), url: z.string().url() })),
  }),
});
export const collections = { articles };
