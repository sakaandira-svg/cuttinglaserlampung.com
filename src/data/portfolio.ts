import type { ImageMetadata } from 'astro';
import type { WhatsAppIntent } from '../lib/whatsapp';

export type StudyPattern = 'arc' | 'weave' | 'rhythm' | 'letter' | 'contour' | 'layer' | 'stair';
type PortfolioBase = {
  id: string;
  code: string;
  category: string;
  title: string;
  description: string;
  alt: string;
  tags: string[];
  serviceHref: string;
  serviceLabel: string;
  intent: WhatsAppIntent;
};
// All current records are original vector studies, never customer project claims.
// The project variant requires permission, actual photography, and verified details.
export type PortfolioItem = PortfolioBase & (
  | { kind: 'concept'; study: StudyPattern; tone: 'green' | 'silver' | 'orange' }
  | { kind: 'project'; image: ImageMetadata; focus: string; material: string; verifiedDetails: string; permissionConfirmed: true }
);
export const portfolio: PortfolioItem[] = [
  { id:'eksterior', code:'EXT / 01', category:'Fasad / Pagar', title:'Ritme pada fasad.', description:'Kerapatan pola, skala bidang, dan bayangan. Bahas material serta struktur sesuai konteks bangunan.', alt:'Studi vektor panel fasad dengan deretan bukaan lengkung dan jejak garis potong. Ilustrasi konsep.', tags:['Eksterior','Fasad','Pagar','Metal'], serviceHref:'/fasad-laser-cutting-lampung/', serviceLabel:'Layanan fasad', intent:'fasad', kind:'concept', study:'arc', tone:'green' },
  { id:'interior', code:'INT / 02', category:'Interior / Partisi', title:'Cahaya di sela pola.', description:'Bukaan organik untuk menyaring pandangan. Skala motif dan penopang mengikuti kebutuhan ruang.', alt:'Studi vektor panel partisi dengan bukaan berbentuk lensa yang saling berulang. Ilustrasi konsep.', tags:['Interior','Partisi','Custom'], serviceHref:'/partisi-laser-cutting-lampung/', serviceLabel:'Layanan partisi', intent:'partisi', kind:'concept', study:'weave', tone:'silver' },
  { id:'ornamen', code:'ORN / 03', category:'Ornamen / Motif custom', title:'Geometri yang berirama.', description:'Pola berpuncak dan berulang, disusun sebagai eksplorasi geometris kontemporer. Motif dan sambungannya dibahas sebelum produksi.', alt:'Studi vektor pola geometris berpuncak yang dipotong berulang pada panel. Ilustrasi konsep orisinal.', tags:['Ornamen','Custom','Metal'], serviceHref:'/laser-cutting-plat-besi-lampung/', serviceLabel:'Cutting plat besi', intent:'plat-besi', kind:'concept', study:'rhythm', tone:'orange' },
  { id:'signage', code:'SGN / 04', category:'Signage / Huruf timbul', title:'Identitas dalam bidang.', description:'Studi ruang negatif pada bentuk huruf. Material, ukuran, dan tampilan permukaan mengikuti identitas visual Anda.', alt:'Studi vektor bentuk huruf geometris dalam panel potong. Ilustrasi konsep signage.', tags:['Signage','Huruf timbul','Acrylic'], serviceHref:'/laser-cutting-acrylic-lampung/', serviceLabel:'Acrylic & lettering', intent:'acrylic', kind:'concept', study:'letter', tone:'green' },
  { id:'cnc', code:'CNC / 05', category:'CNC / Pola berlapis', title:'Garis menjadi kedalaman.', description:'Eksplorasi kontur dan jalur berulang. Kedalaman, geometri, dan bahan perlu disesuaikan dengan proses routing.', alt:'Studi vektor jalur kontur bersarang sebagai eksplorasi pola CNC. Bukan gambar kerja.', tags:['CNC','Interior','Custom'], serviceHref:'/cnc-router-lampung/', serviceLabel:'CNC router', intent:'cnc', kind:'concept', study:'contour', tone:'silver' },
  { id:'material', code:'MAT / 06', category:'Material / Panel', title:'Susunan. Celah. Bayangan.', description:'Ritme bukaan pada bidang lembaran. Pilihan material dan finishing dibahas sesuai lokasi penerapan.', alt:'Studi vektor celah bersudut berulang pada panel hijau. Ilustrasi konsep material.', tags:['Material','Metal','Custom'], serviceHref:'/layanan/#material', serviceLabel:'Pilihan material', intent:'general', kind:'concept', study:'layer', tone:'green' },
  { id:'railing', code:'RLG / 07', category:'Railing / Panel isian', title:'Ritme mengikuti langkah.', description:'Studi komposisi isian tangga dan bordes. Ilustrasi ini tidak menetapkan ukuran, kekuatan, atau kelayakan sistem pengaman; detail perlu ditinjau pihak yang kompeten.', alt:'Ilustrasi geometris panel miring di atas jejak anak tangga, untuk pembahasan komposisi isian railing; bukan gambar teknis.', tags:['Railing','Interior','Panel isian'], serviceHref:'/laser-cutting-plat-besi-lampung/', serviceLabel:'Pengolahan panel besi', intent:'plat-besi', kind:'concept', study:'stair', tone:'green' },
];
