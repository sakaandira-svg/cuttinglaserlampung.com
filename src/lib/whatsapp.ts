import { business } from '../config/business';

export type WhatsAppIntent = 'general' | 'acrylic' | 'pagar' | 'cnc' | 'stainless' | 'portfolio';

const messages: Record<WhatsAppIntent, string> = {
  general: 'Halo, saya ingin konsultasi jasa cutting laser dan fabrikasi di Lampung. Saya ingin mengirim desain atau referensi.',
  acrylic: 'Halo, saya ingin konsultasi laser cutting acrylic di Lampung. Saya ingin mengirim desain dan ukuran.',
  pagar: 'Halo, saya ingin konsultasi pembuatan pagar laser cutting di Lampung. Saya ingin mengirim ukuran atau referensi.',
  cnc: 'Halo, saya ingin konsultasi jasa CNC router di Lampung. Saya ingin mengirim detail kebutuhan.',
  stainless: 'Halo, saya ingin konsultasi laser cutting stainless di Lampung. Saya ingin mengirim desain atau ukuran.',
  portfolio: 'Halo, saya ingin menanyakan pekerjaan cutting laser seperti yang ada di portfolio. Saya ingin mengirim referensi.',
};

export function whatsappUrl(intent: WhatsAppIntent = 'general') {
  const number = business.whatsappNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(messages[intent])}`;
}

export function hasWhatsAppNumber() {
  return business.whatsappNumber.length > 0;
}
