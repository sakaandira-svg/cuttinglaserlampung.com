---
{
  "title": "Kedalaman pocket CNC: menyebut permukaan acuan agar gambar tidak ambigu",
  "description": "Jelaskan kedalaman rongga dari permukaan yang tepat. Bedakan ukuran total, sisa bidang, dan posisi fitur sebelum gambar diterjemahkan menjadi pekerjaan CNC.",
  "cluster": "proses",
  "topic": "cnc",
  "layout": "field-guide",
  "release": "round7",
  "primaryIntent": "Mendokumentasikan kedalaman rongga CNC dan permukaan acuan pada gambar kebutuhan.",
  "targetKeywordCluster": "kedalaman pocket cnc: menyebut permukaan acuan agar gambar tidak ambigu",
  "targetUser": "Desainer komponen berongga yang perlu berkomunikasi dengan penyiap proses.",
  "uniqueValue": "Penampang dan tabel acuan yang membedakan kedalaman fitur dari ketebalan sisa tanpa memberi setelan mesin.",
  "cannibalizationRisk": "Berbeda dari sudut dalam CNC dan kerf: fokus pada bahasa dimensi arah kedalaman serta acuan gambar.",
  "takeaway": "Setiap angka kedalaman harus mempunyai permukaan acuan. Nyatakan bentuk akhir melalui penampang; titik nol mesin tetap ditetapkan oleh penyiap proses.",
  "whatsappMessage": "Halo Cutting Laser Lampung, saya membaca panduan kedalaman pocket CNC. Saya ingin menyamakan permukaan acuan, kedalaman rongga, dan bentuk akhir melalui gambar penampang.",
  "workshopRelevance": "Bawa sketsa dan referensi permukaan acuan, dasar rongga, bidang tersisa untuk dibahas melalui WhatsApp atau kunjungan workshop sesuai kesepakatan.",
  "publishedAt": "2026-09-05",
  "updatedAt": "2026-09-05",
  "status": "published",
  "noindex": false,
  "canonical": "https://cuttinglaserlampung.com/artikel/kedalaman-pocket-dan-referensi-nol/",
  "relatedServices": [
    "cnc-router-lampung"
  ],
  "relatedArticles": [
    "sudut-dalam-cnc-dan-bentuk-pasangan",
    "relief-cnc-satu-sisi-atau-dua-sisi",
    "mengukur-bidang-sebelum-konsultasi"
  ],
  "portfolioId": "cnc",
  "visual": {
    "type": "layers",
    "labels": [
      "Permukaan acuan",
      "Dasar rongga",
      "Bidang tersisa"
    ],
    "alt": "Studi diagram cnc router yang membandingkan permukaan acuan, dasar rongga, bidang tersisa pada tiga bidang ilustrasi.",
    "caption": "Setiap angka kedalaman harus mempunyai permukaan acuan. Nyatakan bentuk akhir melalui penampang; titik nol mesin tetap ditetapkan oleh penyiap proses."
  },
  "sources": [
    {
      "label": "Vectric — geometri vektor dan pratinjau jalur alat",
      "url": "https://www.vectric.com/products/vcarve/"
    }
  ]
}
---

Sebuah angka kedalaman belum lengkap tanpa menyebut dari mana angka itu diukur. Pada komponen berongga, istilah dalam, tebal, dan sisa bahan dapat merujuk pada bagian berbeda. Gambar yang jelas membantu mencegah ketiganya tertukar saat kebutuhan diterjemahkan.

Panduan ini membahas informasi desain untuk konsultasi. Ia tidak mengajarkan pengaturan titik nol mesin atau parameter pengerjaan. Acuan kerja mesin ditentukan oleh pihak yang menyiapkan proses setelah bahan, bentuk, dan urutan kerja dievaluasi.

## Mulai dari bentuk akhir yang dibutuhkan

Gambarkan penampang melintasi rongga. Tunjukkan muka atas, dasar pocket, serta batas bawah komponen. Dengan gambar itu, pembaca dapat melihat apakah fitur hanya berupa cekungan atau harus menembus seluruh bahan.

Contohnya, sebuah logo akan ditempatkan pada rongga dangkal. Kebutuhan desain dapat berupa permukaan logo sejajar dengan bidang sekitarnya, bukan sekadar angka kedalaman tertentu. Sertakan ukuran dan bentuk pasangan agar tujuan tersebut dapat ditinjau.

## Beri nama pada permukaan acuan

Gunakan sebutan yang konsisten, misalnya muka A atau permukaan atas setelah proses yang disepakati. Bila beberapa tahap mengubah permukaan, jelaskan kondisi mana yang menjadi acuan. Hindari berganti istilah atas dan depan tanpa gambar orientasi.

Pada komponen yang dapat dibalik, muka A dan muka B perlu dikenali dengan jelas. Tambahkan panah arah dan kode sisi. Foto atau sketsa tiga dimensi dapat membantu, tetapi penampang tetap diperlukan untuk membaca hubungan kedalaman secara langsung.

## Bedakan kedalaman dari sisa bidang

Kedalaman pocket diukur dari permukaan acuan menuju dasar rongga. Ketebalan sisa menunjukkan bagian yang masih berada di bawahnya. Kedua informasi saling berkaitan, tetapi jangan menganggap bahan selalu mempunyai ukuran nominal persis tanpa pemeriksaan.

Tandai ukuran mana yang merupakan kebutuhan fungsi dan mana yang masih berupa rencana. Jika perubahan bahan memengaruhi hubungan tersebut, minta peninjauan ulang. Menyalin angka dari proyek lama tidak membuktikan bentuk baru akan memenuhi kebutuhan yang sama.

| Istilah | Yang harus ditunjukkan |
| --- | --- |
| Ketebalan total | Dua batas luar komponen |
| Kedalaman pocket | Permukaan asal dan dasar rongga |
| Sisa bidang | Dasar rongga hingga batas bawah |
| Posisi fitur | Acuan arah mendatar yang dipakai |

## Sertakan fitur yang saling berdekatan

Pocket dapat berada dekat lubang, sambungan, atau tepi. Tunjukkan hubungan tersebut pada gambar yang sama. Peninjau perlu mengetahui apakah dua fitur akan saling bertemu, menyisakan bidang tertentu, atau mempunyai urutan yang perlu dipertimbangkan.

Jika ada beberapa kedalaman, gunakan kode fitur dan tabel ringkas. Warna dapat membantu pembacaan, tetapi sertakan keterangan tertulis. Jangan mengandalkan warna saja karena gambar dapat dicetak atau dibuka dalam tampilan berbeda oleh penerima.

## Periksa pemahaman melalui satu contoh

Sebelum banyak komponen dibuat, pilih penampang paling penting untuk ditinjau bersama. Minta penerima menjelaskan kembali bentuk akhirnya berdasarkan gambar. Perbedaan pemahaman lebih mudah diperbaiki pada tahap ini daripada setelah seluruh daftar pekerjaan disiapkan.

- Namai muka dan permukaan acuan.
- Pisahkan kedalaman dari ketebalan sisa.
- Tunjukkan pasangan bila ada.
- Kodekan fitur dengan kedalaman berbeda.
- Tandai ukuran yang masih menunggu konfirmasi.

Baca [pengerjaan satu sisi atau dua sisi](../relief-cnc-satu-sisi-atau-dua-sisi/) bila kedua muka mempunyai fitur. Bawa penampang ke [konsultasi CNC router](/cnc-router-lampung/) agar diskusi berangkat dari bentuk akhir yang dibutuhkan, bukan angka kedalaman yang terlepas dari acuannya.
