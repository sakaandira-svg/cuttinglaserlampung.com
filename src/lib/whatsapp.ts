import { business } from '../config/business';

export type WhatsAppIntent =
  | 'general'
  | 'plat-besi'
  | 'acrylic'
  | 'acp'
  | 'cnc'
  | 'stainless'
  | 'pagar'
  | 'fasad'
  | 'railing'
  | 'partisi'
  | 'huruf-timbul'
  | 'portfolio';

const messages: Record<WhatsAppIntent, string> = {
  general: 'Halo Cutting Laser Lampung, saya ingin konsultasi jasa laser cutting di Lampung. Saya ingin mengirim desain, ukuran, atau foto referensi.',
  'plat-besi': 'Halo Cutting Laser Lampung, saya ingin konsultasi laser cutting plat besi. Saya ingin mengirim desain dan ukuran untuk kebutuhan di Lampung.',
  acrylic: 'Halo Cutting Laser Lampung, saya ingin konsultasi laser cutting acrylic/akrilik di Lampung. Saya ingin mengirim desain, ukuran, serta kebutuhan finishing.',
  acp: 'Halo Cutting Laser Lampung, saya ingin konsultasi cutting ACP di Lampung. Saya ingin menanyakan kebutuhan panel atau fasad.',
  cnc: 'Halo Cutting Laser Lampung, saya ingin konsultasi jasa CNC router di Lampung. Saya ingin mengirim detail material, ukuran, dan file.',
  stainless: 'Halo Cutting Laser Lampung, saya ingin konsultasi laser cutting stainless di Lampung. Saya ingin mengirim desain, ukuran, dan foto referensi.',
  pagar: 'Halo Cutting Laser Lampung, saya ingin konsultasi pembuatan pagar laser cutting. Saya ingin mengirim ukuran atau foto referensi.',
  fasad: 'Halo Cutting Laser Lampung, saya ingin konsultasi fasad laser cutting di Lampung. Saya ingin membahas ukuran, pola, dan konteks bangunan.',
  railing: 'Halo Cutting Laser Lampung, saya ingin konsultasi railing tangga laser cutting. Saya ingin mengirim ukuran dan referensi desain.',
  partisi: 'Halo Cutting Laser Lampung, saya ingin konsultasi partisi laser cutting. Saya ingin mengirim ukuran ruang dan referensi yang dibutuhkan.',
  'huruf-timbul': 'Halo Cutting Laser Lampung, saya ingin konsultasi huruf timbul laser cutting di Lampung. Saya ingin mengirim desain, ukuran, dan material yang diinginkan.',
  portfolio: 'Halo Cutting Laser Lampung, saya ingin menanyakan pekerjaan serupa seperti yang ada di portfolio. Saya ingin mengirim referensi atau foto kebutuhan.',
};

export function whatsappUrl(intent: WhatsAppIntent = 'general') {
  const number = business.whatsappNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(messages[intent])}`;
}

export function hasWhatsAppNumber() {
  return business.whatsappNumber.length > 0;
}
