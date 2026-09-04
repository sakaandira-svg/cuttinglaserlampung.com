import { getCollection } from 'astro:content';
export const clusters = { proses:'Proses & desain', material:'Pengetahuan material', aplikasi:'Ruang & aplikasi', perencanaan:'Perencanaan proyek' } as const;
export const articlePath = (id: string) => `/artikel/${id}/`;
export async function publishedArticles() {
  const today = new Date().toLocaleDateString('en-CA', { timeZone:'Asia/Jakarta' });
  return (await getCollection('articles')).filter(a => a.data.status === 'published' && !a.data.noindex && a.data.publishedAt <= today).sort((a,b) => a.id.localeCompare(b.id));
}
export function displayDate(date: string) { return new Intl.DateTimeFormat('id-ID', {day:'numeric',month:'long',year:'numeric',timeZone:'Asia/Jakarta'}).format(new Date(`${date}T00:00:00+07:00`)); }
