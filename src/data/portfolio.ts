import type { ImageMetadata } from 'astro';
import type { WhatsAppIntent } from '../lib/whatsapp';
import facade from '../assets/portfolio/studi-fasad.png';
import interior from '../assets/portfolio/studi-partisi.png';
import ornament from '../assets/portfolio/studi-ornamen.png';

// Concept images are never represented as completed work. See docs/IMAGE-REPLACEMENT.md.
type PortfolioBase = {
  id: string;
  category: string;
  title: string;
  description: string;
  image: ImageMetadata;
  alt: string;
  focus: string;
  tags: string[];
  considerations: { label: string; text: string }[];
  serviceHref: string;
  serviceLabel: string;
  intent: WhatsAppIntent;
};
export type PortfolioItem = PortfolioBase & (
  | { kind: 'concept' }
  | { kind: 'project'; verifiedDetails: string; permissionConfirmed: true }
);

export const portfolio: PortfolioItem[] = [
  {
    id: 'eksterior', category: 'Eksterior / Fasad & pagar', title: 'Ritme pada tampak bangunan.',
    description: 'Bidang yang terasa ringan, pola yang tetap berkarakter. Eksplorasi hubungan antara bukaan, bayangan, dan skala arsitektur.',
    image: facade, kind: 'concept', alt: 'Ilustrasi konsep screen logam bermotif organik pada fasad, dengan bayangan di dinding terang.', focus: '50% 50%',
    tags: ['Fasad', 'Pagar bermotif', 'Screen eksterior'],
    considerations: [
      { label: 'Maksud visual', text: 'Motif mengikuti ritme bangunan, dengan kerapatan pola yang mempertimbangkan privasi dan cahaya.' },
      { label: 'Untuk dibahas', text: 'Ukuran modul, kondisi luar ruang, struktur pendukung, sambungan, dan rencana finishing.' },
    ], serviceHref: '/fasad-laser-cutting-lampung/', serviceLabel: 'Tentang fasad laser cutting', intent: 'fasad',
  },
  {
    id: 'interior', category: 'Interior / Partisi dekoratif', title: 'Membagi ruang. Meneruskan cahaya.',
    description: 'Partisi sebagai aksen ruang, dengan celah dan motif yang menyaring pandangan tanpa kehilangan keterbukaan.',
    image: interior, kind: 'concept', alt: 'Ilustrasi konsep partisi bermotif botani berwarna perunggu dengan cahaya alami pada interior terang.', focus: '50% 50%',
    tags: ['Partisi', 'Panel interior', 'Motif organik'],
    considerations: [
      { label: 'Maksud visual', text: 'Pola menjadi penghubung antarruang. Proporsinya dipertimbangkan dari jarak pandang dan arah datangnya cahaya.' },
      { label: 'Untuk dibahas', text: 'Ukuran ruang, kebutuhan privasi, detail tepi, titik penopang, serta warna dan tekstur permukaan.' },
    ], serviceHref: '/partisi-laser-cutting-lampung/', serviceLabel: 'Tentang partisi laser cutting', intent: 'partisi',
  },
  {
    id: 'ornamen', category: 'Detail / Ornamen & lettering', title: 'Karakter hadir dalam detail.',
    description: 'Garis lengkung, bidang solid, dan kontras permukaan membuka kemungkinan untuk ornamen, lettering, serta elemen visual custom.',
    image: ornament, kind: 'concept', alt: 'Ilustrasi konsep komposisi potongan logam ornamental dan bentuk acrylic di atas permukaan gelap.', focus: '50% 50%',
    tags: ['Ornamen custom', 'Lettering', 'Acrylic & metal'],
    considerations: [
      { label: 'Maksud visual', text: 'Detail yang terbaca dekat maupun jauh, dengan bentuk dan permukaan yang mendukung identitas visual.' },
      { label: 'Untuk dibahas', text: 'Ukuran detail terkecil, bagian yang saling terhubung, pilihan material, dan konteks penempatan akhir.' },
    ], serviceHref: '/laser-cutting-acrylic-lampung/', serviceLabel: 'Tentang acrylic & lettering', intent: 'acrylic',
  },
];
