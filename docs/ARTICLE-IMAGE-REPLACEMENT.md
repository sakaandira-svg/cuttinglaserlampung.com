# Article image replacement

The single source of truth is src/data/article-images.json. ArticleVisual.astro reads the manifest; individual Markdown files do not embed the primary image. All current assets are original editorial SVG concepts, not customer project photography. The build does not regenerate or overwrite them.

## Replace an image

1. Obtain permission for the real photograph. Remove identifying client data unless publication is authorized.
2. Add an optimized local WebP/AVIF/JPEG under public/media/articles/. Target a 2:1 crop and at most 350 KiB; preserve the important subject on mobile.
3. Edit the matching manifest record: src, actual width/height, alt, caption, kind: photo, permissionConfirmed: true, and truthful provenance. Keep suggestedPhoto as the brief. Never label a concept as completed work.
4. The component uses explicit dimensions, responsive sizing and eager loading for the hero. The 2:1 display canvas contains other ratios without cropping; use the recommended crop for a full composition.
5. Run npm run verify and review desktop/mobile. OG social cards remain separate generated editorial graphics.

For alt text, describe the visible subject, material and decision illustrated. Do not assert an unverified client, location or installed project. Avoid repeating a city or service keyword purely for SEO.

## [Acrylic bening, opal, atau berwarna: memilih tampilan untuk display](https://cuttinglaserlampung.com/artikel/acrylic-bening-opal-warna/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/acrylic-bening-opal-warna.svg |
| Repository file | public/media/articles/acrylic-bening-opal-warna.svg |
| Suggested real photo | Dokumentasi nyata yang diizinkan dan relevan dengan acrylic bening, opal, atau berwarna: memilih tampilan untuk display. Tampilkan konteks serta detail yang dijelaskan, tanpa klaim proyek yang belum diverifikasi. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial acrylic / akrilik: tiga studi geometri berlabel transparansi, latar warna, tepi terlihat. |
| Replacement alt guidance | Describe the actual visible acrylic / akrilik subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Akses servis di balik ACP: menandai bagian yang harus tetap dapat dijangkau](https://cuttinglaserlampung.com/artikel/akses-servis-di-balik-panel-acp/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/akses-servis-di-balik-panel-acp.svg |
| Repository file | public/media/articles/akses-servis-di-balik-panel-acp.svg |
| Suggested real photo | Foto contoh panel akses terbuka dengan izin pemilik dan tanpa memperlihatkan instalasi atau data yang sensitif. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial acp: tiga studi geometri berlabel perangkat belakang, panel akses, ruang kerja. |
| Replacement alt guidance | Describe the actual visible acp subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Alur lipat ACP: membedakan gambar bentangan dari ukuran panel jadi](https://cuttinglaserlampung.com/artikel/alur-lipat-acp-dan-ukuran-jadi/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/alur-lipat-acp-dan-ukuran-jadi.svg |
| Repository file | public/media/articles/alur-lipat-acp-dan-ukuran-jadi.svg |
| Suggested real photo | Foto sampel ACP bentangan dan bentuk lipat yang sudah dibuat serta disetujui untuk dokumentasi. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial acp: tiga studi geometri berlabel tampak akhir, bentangan panel, pertemuan sudut. |
| Replacement alt guidance | Describe the actual visible acp subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Arah serat stainless antarpanel: menjaga bidang tetap terbaca sebagai satu](https://cuttinglaserlampung.com/artikel/arah-serat-stainless-antarpanel/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/arah-serat-stainless-antarpanel.svg |
| Repository file | public/media/articles/arah-serat-stainless-antarpanel.svg |
| Suggested real photo | Foto dua sampel stainless dengan arah tekstur berbeda di bawah pencahayaan yang sama. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial stainless: tiga studi geometri berlabel arah sejalan, panel diputar, sambungan bidang. |
| Replacement alt guidance | Describe the actual visible stainless subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Arah warna dan batch ACP: meninjau panel berdampingan sebelum pemasangan](https://cuttinglaserlampung.com/artikel/arah-warna-dan-batch-panel-acp/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/arah-warna-dan-batch-panel-acp.svg |
| Repository file | public/media/articles/arah-warna-dan-batch-panel-acp.svg |
| Suggested real photo | Foto label produk ACP dan sampel berdampingan dengan data sensitif penjual ditutup serta arah tetap terbaca. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial acp: tiga studi geometri berlabel identitas panel, arah pemasangan, bidang bertemu. |
| Replacement alt guidance | Describe the actual visible acp subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Bayangan panel pada jam berbeda: membuat catatan pengamatan untuk desain fasad](https://cuttinglaserlampung.com/artikel/bayangan-panel-pada-jam-berbeda/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/bayangan-panel-pada-jam-berbeda.svg |
| Repository file | public/media/articles/bayangan-panel-pada-jam-berbeda.svg |
| Suggested real photo | Rangkaian foto lokasi yang sama pada waktu berbeda, dengan tanggal dan waktu nyata serta izin pemilik. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial fasad / facade: tiga studi geometri berlabel waktu pengamatan, jejak bayangan, aktivitas ruang. |
| Replacement alt guidance | Describe the actual visible fasad / facade subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Display acrylic bongkar pasang: merancang urutan rakitan dan penyimpanan](https://cuttinglaserlampung.com/artikel/display-acrylic-bongkar-pasang/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/display-acrylic-bongkar-pasang.svg |
| Repository file | public/media/articles/display-acrylic-bongkar-pasang.svg |
| Suggested real photo | Foto urutan perakitan prototipe display acrylic milik sendiri, termasuk posisi komponen saat disimpan. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial acrylic / akrilik: tiga studi geometri berlabel bagian terpisah, urutan rakit, ruang simpan. |
| Replacement alt guidance | Describe the actual visible acrylic / akrilik subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Menyiapkan ekspor CorelDRAW: satuan, teks, lapisan, dan bukti tampilan](https://cuttinglaserlampung.com/artikel/ekspor-file-coreldraw-untuk-cutting/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/ekspor-file-coreldraw-untuk-cutting.svg |
| Repository file | public/media/articles/ekspor-file-coreldraw-untuk-cutting.svg |
| Suggested real photo | Tangkapan layar ekspor desain contoh buatan sendiri, menampilkan ukuran dokumen dan daftar lapisan. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial proses & desain: tiga studi geometri berlabel sumber editable, salinan ekspor, pemeriksaan ulang. |
| Replacement alt guidance | Describe the actual visible proses & desain subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Panel fasad di depan jendela: merencanakan akses pembersihan dan pemeriksaan](https://cuttinglaserlampung.com/artikel/fasad-dan-akses-pembersihan-jendela/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/fasad-dan-akses-pembersihan-jendela.svg |
| Repository file | public/media/articles/fasad-dan-akses-pembersihan-jendela.svg |
| Suggested real photo | Foto hubungan screen dan jendela pada lokasi yang diizinkan, tanpa memperagakan metode kerja di ketinggian. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial fasad / facade: tiga studi geometri berlabel jendela belakang, screen depan, jalur akses. |
| Replacement alt guidance | Describe the actual visible fasad / facade subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Merencanakan finishing panel plat besi sejak tahap desain](https://cuttinglaserlampung.com/artikel/finishing-panel-plat-besi/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/finishing-panel-plat-besi.svg |
| Repository file | public/media/articles/finishing-panel-plat-besi.svg |
| Suggested real photo | Dokumentasi nyata yang diizinkan dan relevan dengan merencanakan finishing panel plat besi sejak tahap desain. Tampilkan konteks serta detail yang dijelaskan, tanpa klaim proyek yang belum diverifikasi. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial plat besi: tiga studi geometri berlabel besi potong, persiapan tepi, lapisan akhir. |
| Replacement alt guidance | Describe the actual visible plat besi subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Garis ganda dan kurva terbuka: membaca masalah kontur sebelum cutting](https://cuttinglaserlampung.com/artikel/garis-ganda-dan-kurva-terbuka/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/garis-ganda-dan-kurva-terbuka.svg |
| Repository file | public/media/articles/garis-ganda-dan-kurva-terbuka.svg |
| Suggested real photo | Tangkapan layar kontur contoh dengan duplikat dan celah yang ditandai, bukan file pelanggan. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial proses & desain: tiga studi geometri berlabel garis bertumpuk, celah kontur, pertemuan jalur. |
| Replacement alt guidance | Describe the actual visible proses & desain subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Huruf timbul yang terbaca: jarak pandang, kontras, dan susunan](https://cuttinglaserlampung.com/artikel/huruf-timbul-jarak-baca/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/huruf-timbul-jarak-baca.svg |
| Repository file | public/media/articles/huruf-timbul-jarak-baca.svg |
| Suggested real photo | Dokumentasi nyata yang diizinkan dan relevan dengan huruf timbul yang terbaca: jarak pandang, kontras, dan susunan. Tampilkan konteks serta detail yang dijelaskan, tanpa klaim proyek yang belum diverifikasi. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial huruf & signage: tiga studi geometri berlabel bentuk huruf, kontras latar, jarak pembaca. |
| Replacement alt guidance | Describe the actual visible huruf & signage subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Kedalaman pocket CNC: menyebut permukaan acuan agar gambar tidak ambigu](https://cuttinglaserlampung.com/artikel/kedalaman-pocket-dan-referensi-nol/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/kedalaman-pocket-dan-referensi-nol.svg |
| Repository file | public/media/articles/kedalaman-pocket-dan-referensi-nol.svg |
| Suggested real photo | Foto sampel pocket CNC dan gambar penampangnya, dengan ukuran hanya yang sudah benar-benar diverifikasi. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial cnc router: tiga studi geometri berlabel permukaan acuan, dasar rongga, bidang tersisa. |
| Replacement alt guidance | Describe the actual visible cnc router subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Kemasan dan serah-terima panel lepas: memeriksa identitas, jumlah, dan kondisi](https://cuttinglaserlampung.com/artikel/kemasan-dan-serah-terima-panel-lepas/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/kemasan-dan-serah-terima-panel-lepas.svg |
| Repository file | public/media/articles/kemasan-dan-serah-terima-panel-lepas.svg |
| Suggested real photo | Foto kemasan contoh terbuka dengan daftar isi dan kode komponen milik sendiri, tanpa label alamat pelanggan. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial perencanaan: tiga studi geometri berlabel daftar kemasan, kode komponen, catatan kondisi. |
| Replacement alt guidance | Describe the actual visible perencanaan subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Melindungi stainless saat renovasi: pisahkan pekerjaan dan catat kondisi permukaan](https://cuttinglaserlampung.com/artikel/kontaminasi-stainless-saat-renovasi/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/kontaminasi-stainless-saat-renovasi.svg |
| Repository file | public/media/articles/kontaminasi-stainless-saat-renovasi.svg |
| Suggested real photo | Foto penyimpanan sampel stainless yang terlindung dan terpisah dari material lain, dengan izin pemilik lokasi. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial stainless: tiga studi geometri berlabel area bersih, pekerjaan sekitar, pemeriksaan muka. |
| Replacement alt guidance | Describe the actual visible stainless subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Koordinasi proyek dari luar Bandar Lampung: membedakan data awal dan ukuran final](https://cuttinglaserlampung.com/artikel/koordinasi-pengukuran-jarak-jauh-lampung/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/koordinasi-pengukuran-jarak-jauh-lampung.svg |
| Repository file | public/media/articles/koordinasi-pengukuran-jarak-jauh-lampung.svg |
| Suggested real photo | Foto contoh sketsa berukuran dan foto konteks yang dipasangkan, dengan data lokasi pribadi disamarkan. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial riset lokal lampung: tiga studi geometri berlabel data dari lokasi, tinjauan bersama, konfirmasi final. |
| Replacement alt guidance | Describe the actual visible riset lokal lampung subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Urutan kerja renovasi dan panel custom: siapa menyiapkan bidang, memasang, dan memeriksa?](https://cuttinglaserlampung.com/artikel/koordinasi-urutan-kerja-renovasi/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/koordinasi-urutan-kerja-renovasi.svg |
| Repository file | public/media/articles/koordinasi-urutan-kerja-renovasi.svg |
| Suggested real photo | Foto papan koordinasi contoh yang memuat tahap pekerjaan tanpa nama atau jadwal pelanggan nyata. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial perencanaan: tiga studi geometri berlabel bidang disiapkan, panel dipasang, hasil dijaga. |
| Replacement alt guidance | Describe the actual visible perencanaan subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Lapisan logo dan hierarki papan nama: menentukan apa yang dibaca lebih dahulu](https://cuttinglaserlampung.com/artikel/lapisan-logo-dan-hierarki-papan-nama/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/lapisan-logo-dan-hierarki-papan-nama.svg |
| Repository file | public/media/articles/lapisan-logo-dan-hierarki-papan-nama.svg |
| Suggested real photo | Foto maket papan nama contoh dengan lapisan terpisah dan nama fiktif yang dinyatakan sebagai studi desain. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial huruf & signage: tiga studi geometri berlabel identitas utama, informasi kedua, lapisan pendukung. |
| Replacement alt guidance | Describe the actual visible huruf & signage subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Laser cutting atau CNC router: memilih proses dari bentuk akhir](https://cuttinglaserlampung.com/artikel/laser-cutting-vs-cnc-router/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/laser-cutting-vs-cnc-router.svg |
| Repository file | public/media/articles/laser-cutting-vs-cnc-router.svg |
| Suggested real photo | Dokumentasi nyata yang diizinkan dan relevan dengan laser cutting atau cnc router: memilih proses dari bentuk akhir. Tampilkan konteks serta detail yang dijelaskan, tanpa klaim proyek yang belum diverifikasi. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial proses & desain: tiga studi geometri berlabel potong tembus, ruang alat, kedalaman. |
| Replacement alt guidance | Describe the actual visible proses & desain subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Lubang dan dudukan acrylic: menyampaikan detail pemasangan tanpa menebak kelonggaran](https://cuttinglaserlampung.com/artikel/lubang-dudukan-acrylic/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/lubang-dudukan-acrylic.svg |
| Repository file | public/media/articles/lubang-dudukan-acrylic.svg |
| Suggested real photo | Foto sampel acrylic dan perangkat dudukannya berdampingan dengan sketsa posisi lubang yang telah ditinjau. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial acrylic / akrilik: tiga studi geometri berlabel tepi acrylic, perangkat pasangan, posisi lubang. |
| Replacement alt guidance | Describe the actual visible acrylic / akrilik subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Merencanakan lubang pengikat panel besi sebelum motif dikunci](https://cuttinglaserlampung.com/artikel/lubang-pengikat-panel-besi/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/lubang-pengikat-panel-besi.svg |
| Repository file | public/media/articles/lubang-pengikat-panel-besi.svg |
| Suggested real photo | Foto panel contoh dengan penanda posisi pengikat dan ukuran koordinasi yang telah diverifikasi. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial plat besi: tiga studi geometri berlabel zona tepi, acuan posisi, ruang akses. |
| Replacement alt guidance | Describe the actual visible plat besi subject and its relationship to this article’s decision; omit unsupported project claims. |

## [MDF dan HMR untuk interior: memahami batas ketahanan lembap](https://cuttinglaserlampung.com/artikel/mdf-dan-hmr-untuk-interior/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/mdf-dan-hmr-untuk-interior.svg |
| Repository file | public/media/articles/mdf-dan-hmr-untuk-interior.svg |
| Suggested real photo | Dokumentasi nyata yang diizinkan dan relevan dengan mdf dan hmr untuk interior: memahami batas ketahanan lembap. Tampilkan konteks serta detail yang dijelaskan, tanpa klaim proyek yang belum diverifikasi. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial mdf / hmr: tiga studi geometri berlabel identitas papan, kondisi lembap, detail tepi. |
| Replacement alt guidance | Describe the actual visible mdf / hmr subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Memahami kerf dan kelonggaran pada sambungan panel](https://cuttinglaserlampung.com/artikel/memahami-kerf-dan-sambungan/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/memahami-kerf-dan-sambungan.svg |
| Repository file | public/media/articles/memahami-kerf-dan-sambungan.svg |
| Suggested real photo | Dokumentasi nyata yang diizinkan dan relevan dengan memahami kerf dan kelonggaran pada sambungan panel. Tampilkan konteks serta detail yang dijelaskan, tanpa klaim proyek yang belum diverifikasi. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial proses & desain: tiga studi geometri berlabel garis nominal, lebar potong, pasangan nyata. |
| Replacement alt guidance | Describe the actual visible proses & desain subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Memahami ACP sebelum menentukan potongan, lipatan, dan sambungan](https://cuttinglaserlampung.com/artikel/memahami-panel-acp-dan-metode-potong/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/memahami-panel-acp-dan-metode-potong.svg |
| Repository file | public/media/articles/memahami-panel-acp-dan-metode-potong.svg |
| Suggested real photo | Dokumentasi nyata yang diizinkan dan relevan dengan memahami acp sebelum menentukan potongan, lipatan, dan sambungan. Tampilkan konteks serta detail yang dijelaskan, tanpa klaim proyek yang belum diverifikasi. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial acp: tiga studi geometri berlabel lapisan muka, inti panel, bentuk akhir. |
| Replacement alt guidance | Describe the actual visible acp subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Membandingkan sampel di lokasi Bandar Lampung: menjaga acuan warna, cahaya, dan arah](https://cuttinglaserlampung.com/artikel/membandingkan-sampel-di-lokasi-bandar-lampung/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/membandingkan-sampel-di-lokasi-bandar-lampung.svg |
| Repository file | public/media/articles/membandingkan-sampel-di-lokasi-bandar-lampung.svg |
| Suggested real photo | Foto sampel berlabel di depan latar bangunan yang sebenarnya, dengan persetujuan pemilik dan kondisi cahaya dicatat. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial riset lokal lampung: tiga studi geometri berlabel sampel berkode, latar lokasi, catatan pilihan. |
| Replacement alt guidance | Describe the actual visible riset lokal lampung subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Memilih motif pagar: privasi, ritme, dan pandangan dari jalan](https://cuttinglaserlampung.com/artikel/memilih-motif-pagar/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/memilih-motif-pagar.svg |
| Repository file | public/media/articles/memilih-motif-pagar.svg |
| Suggested real photo | Dokumentasi nyata yang diizinkan dan relevan dengan memilih motif pagar: privasi, ritme, dan pandangan dari jalan. Tampilkan konteks serta detail yang dijelaskan, tanpa klaim proyek yang belum diverifikasi. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial pagar: tiga studi geometri berlabel pandangan jalan, ritme bukaan, batas gerbang. |
| Replacement alt guidance | Describe the actual visible pagar subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Memilih permukaan stainless: pantulan, arah serat, dan perawatan](https://cuttinglaserlampung.com/artikel/memilih-permukaan-stainless/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/memilih-permukaan-stainless.svg |
| Repository file | public/media/articles/memilih-permukaan-stainless.svg |
| Suggested real photo | Dokumentasi nyata yang diizinkan dan relevan dengan memilih permukaan stainless: pantulan, arah serat, dan perawatan. Tampilkan konteks serta detail yang dijelaskan, tanpa klaim proyek yang belum diverifikasi. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial stainless: tiga studi geometri berlabel arah serat, pantulan, sisi terlihat. |
| Replacement alt guidance | Describe the actual visible stainless subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Spons dan foam untuk cutting: identitas bahan lebih dulu](https://cuttinglaserlampung.com/artikel/memilih-spons-foam-untuk-cutting/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/memilih-spons-foam-untuk-cutting.svg |
| Repository file | public/media/articles/memilih-spons-foam-untuk-cutting.svg |
| Suggested real photo | Dokumentasi nyata yang diizinkan dan relevan dengan spons dan foam untuk cutting: identitas bahan lebih dulu. Tampilkan konteks serta detail yang dijelaskan, tanpa klaim proyek yang belum diverifikasi. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial spons & foam: tiga studi geometri berlabel jenis foam, bentuk insert, uji fungsi. |
| Replacement alt guidance | Describe the actual visible spons & foam subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Memilih workshop laser cutting di Lampung: pertanyaan sebelum memesan](https://cuttinglaserlampung.com/artikel/memilih-workshop-laser-cutting-lampung/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/memilih-workshop-laser-cutting-lampung.svg |
| Repository file | public/media/articles/memilih-workshop-laser-cutting-lampung.svg |
| Suggested real photo | Dokumentasi nyata yang diizinkan dan relevan dengan memilih workshop laser cutting di lampung: pertanyaan sebelum memesan. Tampilkan konteks serta detail yang dijelaskan, tanpa klaim proyek yang belum diverifikasi. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial riset lokal lampung: tiga studi geometri berlabel bukti relevan, lingkup jelas, komunikasi. |
| Replacement alt guidance | Describe the actual visible riset lokal lampung subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Dari foto referensi menjadi brief desain yang bisa dibahas](https://cuttinglaserlampung.com/artikel/mengubah-foto-referensi-menjadi-brief/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/mengubah-foto-referensi-menjadi-brief.svg |
| Repository file | public/media/articles/mengubah-foto-referensi-menjadi-brief.svg |
| Suggested real photo | Dokumentasi nyata yang diizinkan dan relevan dengan dari foto referensi menjadi brief desain yang bisa dibahas. Tampilkan konteks serta detail yang dijelaskan, tanpa klaim proyek yang belum diverifikasi. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial perencanaan: tiga studi geometri berlabel referensi, konteks ruang, batas desain. |
| Replacement alt guidance | Describe the actual visible perencanaan subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Menguji sampel sebelum produksi: tentukan pertanyaan yang ingin dijawab](https://cuttinglaserlampung.com/artikel/menguji-sampel-sebelum-produksi/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/menguji-sampel-sebelum-produksi.svg |
| Repository file | public/media/articles/menguji-sampel-sebelum-produksi.svg |
| Suggested real photo | Dokumentasi nyata yang diizinkan dan relevan dengan menguji sampel sebelum produksi: tentukan pertanyaan yang ingin dijawab. Tampilkan konteks serta detail yang dijelaskan, tanpa klaim proyek yang belum diverifikasi. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial perencanaan: tiga studi geometri berlabel pertanyaan uji, variabel sampel, hasil diterima. |
| Replacement alt guidance | Describe the actual visible perencanaan subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Mengukur bidang sebelum konsultasi panel custom](https://cuttinglaserlampung.com/artikel/mengukur-bidang-sebelum-konsultasi/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/mengukur-bidang-sebelum-konsultasi.svg |
| Repository file | public/media/articles/mengukur-bidang-sebelum-konsultasi.svg |
| Suggested real photo | Dokumentasi nyata yang diizinkan dan relevan dengan mengukur bidang sebelum konsultasi panel custom. Tampilkan konteks serta detail yang dijelaskan, tanpa klaim proyek yang belum diverifikasi. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial perencanaan: tiga studi geometri berlabel titik acuan, ukuran bidang, hambatan lokasi. |
| Replacement alt guidance | Describe the actual visible perencanaan subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Pagar lama dengan panel baru: memisahkan kondisi bingkai dari pilihan motif](https://cuttinglaserlampung.com/artikel/menyelaraskan-pagar-lama-dan-panel-baru/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/menyelaraskan-pagar-lama-dan-panel-baru.svg |
| Repository file | public/media/articles/menyelaraskan-pagar-lama-dan-panel-baru.svg |
| Suggested real photo | Foto pagar lama dan sketsa usulan panel dengan izin pemilik serta penandaan jelas bahwa usulan belum terpasang. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial pagar: tiga studi geometri berlabel bingkai eksisting, panel usulan, garis penyatu. |
| Replacement alt guidance | Describe the actual visible pagar subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Data untuk penawaran fabrikasi: bandingkan lingkup, bukan angka saja](https://cuttinglaserlampung.com/artikel/menyiapkan-data-penawaran-fabrikasi/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/menyiapkan-data-penawaran-fabrikasi.svg |
| Repository file | public/media/articles/menyiapkan-data-penawaran-fabrikasi.svg |
| Suggested real photo | Dokumentasi nyata yang diizinkan dan relevan dengan data untuk penawaran fabrikasi: bandingkan lingkup, bukan angka saja. Tampilkan konteks serta detail yang dijelaskan, tanpa klaim proyek yang belum diverifikasi. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial perencanaan: tiga studi geometri berlabel lingkup dasar, pilihan tambahan, asumsi terbuka. |
| Replacement alt guidance | Describe the actual visible perencanaan subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Menyiapkan kunjungan workshop di Lampung: membawa keputusan, sampel, dan pertanyaan](https://cuttinglaserlampung.com/artikel/menyiapkan-kunjungan-workshop-lampung/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/menyiapkan-kunjungan-workshop-lampung.svg |
| Repository file | public/media/articles/menyiapkan-kunjungan-workshop-lampung.svg |
| Suggested real photo | Foto meja diskusi atau sampel yang benar-benar tersedia dan telah diizinkan untuk dokumentasi, tanpa mengklaim fasilitas showroom. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial riset lokal lampung: tiga studi geometri berlabel agenda diskusi, sampel pembanding, catatan keputusan. |
| Replacement alt guidance | Describe the actual visible riset lokal lampung subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Merawat panel dekoratif: mulai dari material dan aksesnya](https://cuttinglaserlampung.com/artikel/merawat-panel-dekoratif/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/merawat-panel-dekoratif.svg |
| Repository file | public/media/articles/merawat-panel-dekoratif.svg |
| Suggested real photo | Dokumentasi nyata yang diizinkan dan relevan dengan merawat panel dekoratif: mulai dari material dan aksesnya. Tampilkan konteks serta detail yang dijelaskan, tanpa klaim proyek yang belum diverifikasi. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial perencanaan: tiga studi geometri berlabel identitas bahan, akses bersih, catatan kondisi. |
| Replacement alt guidance | Describe the actual visible perencanaan subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Merencanakan screen fasad untuk konteks bangunan tropis Lampung](https://cuttinglaserlampung.com/artikel/merencanakan-screen-fasad-tropis/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/merencanakan-screen-fasad-tropis.svg |
| Repository file | public/media/articles/merencanakan-screen-fasad-tropis.svg |
| Suggested real photo | Dokumentasi nyata yang diizinkan dan relevan dengan merencanakan screen fasad untuk konteks bangunan tropis lampung. Tampilkan konteks serta detail yang dijelaskan, tanpa klaim proyek yang belum diverifikasi. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial fasad / facade: tiga studi geometri berlabel arah cahaya, bukaan ruang, akses belakang. |
| Replacement alt guidance | Describe the actual visible fasad / facade subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Mockup visual railing: memeriksa pola dari beberapa sudut tanpa menguji sistem pengaman](https://cuttinglaserlampung.com/artikel/mockup-railing-dari-sudut-pandang-pengguna/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/mockup-railing-dari-sudut-pandang-pengguna.svg |
| Repository file | public/media/articles/mockup-railing-dari-sudut-pandang-pengguna.svg |
| Suggested real photo | Foto mockup visual pada bidang peraga terpisah dari tangga aktif, dengan label jelas bahwa model tidak berfungsi sebagai pengaman. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial railing: tiga studi geometri berlabel pandangan dekat, tampak ruang, catatan revisi. |
| Replacement alt guidance | Describe the actual visible railing subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Modul ornamen Siger pada bidang panjang: mengatur pengulangan tanpa kehilangan fokus](https://cuttinglaserlampung.com/artikel/modul-ornamen-siger-pada-bidang-panjang/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/modul-ornamen-siger-pada-bidang-panjang.svg |
| Repository file | public/media/articles/modul-ornamen-siger-pada-bidang-panjang.svg |
| Suggested real photo | Foto model komposisi ornamen yang dibuat sendiri berdasarkan referensi berizin, dengan sumber konteks dicatat. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial ornamen lampung: tiga studi geometri berlabel fokus tunggal, ritme terbatas, bidang jeda. |
| Replacement alt guidance | Describe the actual visible ornamen lampung subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Nesting panel: menata komponen tanpa kehilangan arah material dan identitas](https://cuttinglaserlampung.com/artikel/nesting-pola-dan-arah-material/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/nesting-pola-dan-arah-material.svg |
| Repository file | public/media/articles/nesting-pola-dan-arah-material.svg |
| Suggested real photo | Foto lembaran contoh bernomor dengan panah orientasi dan beberapa bentuk komponen, menggunakan bahan milik sendiri. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial proses & desain: tiga studi geometri berlabel arah lembaran, rotasi komponen, kode panel. |
| Replacement alt guidance | Describe the actual visible proses & desain subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Orientasi motif pada railing tangga miring: tegak, mengikuti bidang, atau berulang bertahap](https://cuttinglaserlampung.com/artikel/orientasi-motif-railing-di-tangga-miring/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/orientasi-motif-railing-di-tangga-miring.svg |
| Repository file | public/media/articles/orientasi-motif-railing-di-tangga-miring.svg |
| Suggested real photo | Tiga sketsa pola pada elevasi tangga yang sama, atau foto sampel konsep yang jelas bukan bukti kelayakan railing. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial railing: tiga studi geometri berlabel motif tegak, mengikuti bidang, pengulangan bertahap. |
| Replacement alt guidance | Describe the actual visible railing subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Membawa inspirasi Lampung dan Siger ke panel kontemporer](https://cuttinglaserlampung.com/artikel/ornamen-lampung-dan-siger-kontemporer/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/ornamen-lampung-dan-siger-kontemporer.svg |
| Repository file | public/media/articles/ornamen-lampung-dan-siger-kontemporer.svg |
| Suggested real photo | Dokumentasi nyata yang diizinkan dan relevan dengan membawa inspirasi lampung dan siger ke panel kontemporer. Tampilkan konteks serta detail yang dijelaskan, tanpa klaim proyek yang belum diverifikasi. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial ornamen lampung: tiga studi geometri berlabel asal referensi, abstraksi bentuk, konteks ruang. |
| Replacement alt guidance | Describe the actual visible ornamen lampung subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Panel besi dibaut atau dilas: membandingkan akses, tampilan, dan penggantian](https://cuttinglaserlampung.com/artikel/panel-besi-baut-atau-las/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/panel-besi-baut-atau-las.svg |
| Repository file | public/media/articles/panel-besi-baut-atau-las.svg |
| Suggested real photo | Foto detail sambungan contoh panel besi milik workshop, menampilkan kondisi muka dan belakang tanpa klaim kapasitas. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial plat besi: tiga studi geometri berlabel sambungan terlihat, akses belakang, panel dilepas. |
| Replacement alt guidance | Describe the actual visible plat besi subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Panel besi modular: merencanakan satu bagian yang dapat diganti](https://cuttinglaserlampung.com/artikel/panel-besi-modular-untuk-penggantian/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/panel-besi-modular-untuk-penggantian.svg |
| Repository file | public/media/articles/panel-besi-modular-untuk-penggantian.svg |
| Suggested real photo | Foto urutan panel contoh bernomor dengan satu modul dilepas pada rak peraga yang aman. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial plat besi: tiga studi geometri berlabel modul bernomor, urutan pelepasan, panel pengganti. |
| Replacement alt guidance | Describe the actual visible plat besi subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Panel HMR dekat area lembap: memetakan sumber paparan sebelum memilih detail](https://cuttinglaserlampung.com/artikel/panel-hmr-dekat-area-lembap/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/panel-hmr-dekat-area-lembap.svg |
| Repository file | public/media/articles/panel-hmr-dekat-area-lembap.svg |
| Suggested real photo | Foto kondisi dinding atau area interior sebelum pemasangan, menunjukkan sumber paparan tanpa menampilkan ruang privat. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial mdf / hmr: tiga studi geometri berlabel udara ruang, percikan dekat, sumber rembesan. |
| Replacement alt guidance | Describe the actual visible mdf / hmr subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Panel pagar di sekitar meter dan kotak surat: menjaga akses tanpa memecah komposisi](https://cuttinglaserlampung.com/artikel/panel-pagar-akses-meter-dan-kotak-surat/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/panel-pagar-akses-meter-dan-kotak-surat.svg |
| Repository file | public/media/articles/panel-pagar-akses-meter-dan-kotak-surat.svg |
| Suggested real photo | Foto konteks pagar dengan posisi perangkat ditandai dan nomor meter, alamat pribadi, serta data sensitif ditutup. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial pagar: tiga studi geometri berlabel zona perangkat, bidang motif, ruang pembukaan. |
| Replacement alt guidance | Describe the actual visible pagar subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Panel dekoratif pada railing: pisahkan pola dari fungsi pengaman](https://cuttinglaserlampung.com/artikel/panel-railing-bukan-struktur-utama/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/panel-railing-bukan-struktur-utama.svg |
| Repository file | public/media/articles/panel-railing-bukan-struktur-utama.svg |
| Suggested real photo | Dokumentasi nyata yang diizinkan dan relevan dengan panel dekoratif pada railing: pisahkan pola dari fungsi pengaman. Tampilkan konteks serta detail yang dijelaskan, tanpa klaim proyek yang belum diverifikasi. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial railing: tiga studi geometri berlabel sistem pengaman, panel isian, detail pengikat. |
| Replacement alt guidance | Describe the actual visible railing subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Pantulan stainless di lobi: menguji tampilan dari jalur masuk pengguna](https://cuttinglaserlampung.com/artikel/pantulan-stainless-di-lobi/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/pantulan-stainless-di-lobi.svg |
| Repository file | public/media/articles/pantulan-stainless-di-lobi.svg |
| Suggested real photo | Foto sampel stainless di lokasi lobi nyata dengan persetujuan pemilik, memperlihatkan sumber cahaya dan latarnya. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial stainless: tiga studi geometri berlabel arah datang, posisi sampel, latar pantulan. |
| Replacement alt guidance | Describe the actual visible stainless subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Partisi dan jalur sirkulasi: menguji posisi sebelum memilih pola](https://cuttinglaserlampung.com/artikel/partisi-dan-jalur-sirkulasi/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/partisi-dan-jalur-sirkulasi.svg |
| Repository file | public/media/articles/partisi-dan-jalur-sirkulasi.svg |
| Suggested real photo | Foto ruang kosong atau maket denah dengan penanda posisi partisi, tanpa menghalangi jalur nyata pengguna. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial partisi & interior: tiga studi geometri berlabel jalur pengguna, gerak pintu, posisi partisi. |
| Replacement alt guidance | Describe the actual visible partisi & interior subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Partisi berpola: menyeimbangkan privasi, cahaya, dan alur ruang](https://cuttinglaserlampung.com/artikel/partisi-privasi-dan-cahaya/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/partisi-privasi-dan-cahaya.svg |
| Repository file | public/media/articles/partisi-privasi-dan-cahaya.svg |
| Suggested real photo | Dokumentasi nyata yang diizinkan dan relevan dengan partisi berpola: menyeimbangkan privasi, cahaya, dan alur ruang. Tampilkan konteks serta detail yang dijelaskan, tanpa klaim proyek yang belum diverifikasi. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial partisi & interior: tiga studi geometri berlabel arah pandang, celah cahaya, alur lewat. |
| Replacement alt guidance | Describe the actual visible partisi & interior subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Partisi untuk latar panggilan video: menilai pola melalui kamera dan ruang nyata](https://cuttinglaserlampung.com/artikel/partisi-untuk-latar-panggilan-video/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/partisi-untuk-latar-panggilan-video.svg |
| Repository file | public/media/articles/partisi-untuk-latar-panggilan-video.svg |
| Suggested real photo | Tangkapan pratinjau kamera dari ruang sendiri dengan wajah, layar kerja, dan informasi pribadi tidak ditampilkan. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial partisi & interior: tiga studi geometri berlabel bingkai kamera, skala pola, latar ruang. |
| Replacement alt guidance | Describe the actual visible partisi & interior subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Penamaan komponen dan daftar panel: membuat gambar, jumlah, dan posisi saling cocok](https://cuttinglaserlampung.com/artikel/penamaan-komponen-dan-daftar-panel/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/penamaan-komponen-dan-daftar-panel.svg |
| Repository file | public/media/articles/penamaan-komponen-dan-daftar-panel.svg |
| Suggested real photo | Foto daftar komponen contoh dan panel peraga bernomor dengan seluruh data proyek nyata disamarkan. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial perencanaan: tiga studi geometri berlabel kode komponen, daftar jumlah, posisi pemasangan. |
| Replacement alt guidance | Describe the actual visible perencanaan subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Persetujuan desain dan serah terima: menjaga satu acuan pekerjaan](https://cuttinglaserlampung.com/artikel/persetujuan-desain-dan-serah-terima/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/persetujuan-desain-dan-serah-terima.svg |
| Repository file | public/media/articles/persetujuan-desain-dan-serah-terima.svg |
| Suggested real photo | Dokumentasi nyata yang diizinkan dan relevan dengan persetujuan desain dan serah terima: menjaga satu acuan pekerjaan. Tampilkan konteks serta detail yang dijelaskan, tanpa klaim proyek yang belum diverifikasi. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial perencanaan: tiga studi geometri berlabel versi disetujui, lingkup produksi, hasil diperiksa. |
| Replacement alt guidance | Describe the actual visible perencanaan subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Referensi budaya untuk panel: menyimpan sumber, konteks, dan batas perubahan](https://cuttinglaserlampung.com/artikel/persetujuan-referensi-budaya-untuk-panel/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/persetujuan-referensi-budaya-untuk-panel.svg |
| Repository file | public/media/articles/persetujuan-referensi-budaya-untuk-panel.svg |
| Suggested real photo | Foto lembar referensi milik sendiri dengan sumber dan persetujuan yang boleh dipublikasikan, tanpa data pribadi. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial ornamen lampung: tiga studi geometri berlabel sumber referensi, batas perubahan, persetujuan bentuk. |
| Replacement alt guidance | Describe the actual visible ornamen lampung subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Pertemuan partisi dengan plafon: menyatukan garis visual dan kebutuhan koordinasi](https://cuttinglaserlampung.com/artikel/pertemuan-partisi-dengan-plafon/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/pertemuan-partisi-dengan-plafon.svg |
| Repository file | public/media/articles/pertemuan-partisi-dengan-plafon.svg |
| Suggested real photo | Foto area plafon dan bidang rencana partisi dengan anotasi posisi, tanpa membuka elemen bangunan. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial partisi & interior: tiga studi geometri berlabel batas partisi, bidang plafon, elemen sekitar. |
| Replacement alt guidance | Describe the actual visible partisi & interior subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Pola cutting yang tetap utuh: jembatan, pulau, dan detail kecil](https://cuttinglaserlampung.com/artikel/pola-cutting-jembatan-dan-detail/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/pola-cutting-jembatan-dan-detail.svg |
| Repository file | public/media/articles/pola-cutting-jembatan-dan-detail.svg |
| Suggested real photo | Dokumentasi nyata yang diizinkan dan relevan dengan pola cutting yang tetap utuh: jembatan, pulau, dan detail kecil. Tampilkan konteks serta detail yang dijelaskan, tanpa klaim proyek yang belum diverifikasi. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial proses & desain: tiga studi geometri berlabel bidang utuh, jembatan pola, detail kecil. |
| Replacement alt guidance | Describe the actual visible proses & desain subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Pola insert spons untuk peralatan: menentukan orientasi dan batas ruang benda](https://cuttinglaserlampung.com/artikel/pola-insert-spons-untuk-peralatan/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/pola-insert-spons-untuk-peralatan.svg |
| Repository file | public/media/articles/pola-insert-spons-untuk-peralatan.svg |
| Suggested real photo | Foto peralatan milik sendiri di atas alas ukur dengan nomor benda, tanpa merek atau data pelanggan yang tidak diizinkan. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial spons & foam: tiga studi geometri berlabel batas benda, bagian menonjol, arah simpan. |
| Replacement alt guidance | Describe the actual visible spons & foam subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Pola pagar di jalan menanjak: memilih acuan garis sebelum membagi motif](https://cuttinglaserlampung.com/artikel/pola-pagar-di-jalan-menanjak/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/pola-pagar-di-jalan-menanjak.svg |
| Repository file | public/media/articles/pola-pagar-di-jalan-menanjak.svg |
| Suggested real photo | Foto elevasi pagar pada lokasi nyata yang memiliki perubahan tinggi, dengan izin dan tanpa menyatakan sketsa sebagai hasil proyek. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial pagar: tiga studi geometri berlabel garis jalan, acuan mendatar, transisi panel. |
| Replacement alt guidance | Describe the actual visible pagar subject and its relationship to this article’s decision; omit unsupported project claims. |

## [PVC bukan bahan untuk laser: verifikasi material sebelum cutting](https://cuttinglaserlampung.com/artikel/pvc-bukan-bahan-untuk-laser/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/pvc-bukan-bahan-untuk-laser.svg |
| Repository file | public/media/articles/pvc-bukan-bahan-untuk-laser.svg |
| Suggested real photo | Dokumentasi nyata yang diizinkan dan relevan dengan pvc bukan bahan untuk laser: verifikasi material sebelum cutting. Tampilkan konteks serta detail yang dijelaskan, tanpa klaim proyek yang belum diverifikasi. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial proses & desain: tiga studi geometri berlabel label bahan, data komposisi, metode sesuai. |
| Replacement alt guidance | Describe the actual visible proses & desain subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Relief CNC satu sisi atau dua sisi: menata orientasi dan pasangan fitur](https://cuttinglaserlampung.com/artikel/relief-cnc-satu-sisi-atau-dua-sisi/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/relief-cnc-satu-sisi-atau-dua-sisi.svg |
| Repository file | public/media/articles/relief-cnc-satu-sisi-atau-dua-sisi.svg |
| Suggested real photo | Foto prototipe relief dari sisi depan dan belakang dengan kode orientasi yang sama. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial cnc router: tiga studi geometri berlabel muka depan, fitur belakang, acuan orientasi. |
| Replacement alt guidance | Describe the actual visible cnc router subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Revisi sebagian dan konsistensi batch: memesan ulang tanpa kehilangan acuan awal](https://cuttinglaserlampung.com/artikel/revisi-sebagian-dan-konsistensi-batch/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/revisi-sebagian-dan-konsistensi-batch.svg |
| Repository file | public/media/articles/revisi-sebagian-dan-konsistensi-batch.svg |
| Suggested real photo | Foto sampel lama dan baru dengan kode versi serta identitas bahan yang benar, tanpa menjanjikan warna identik. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial perencanaan: tiga studi geometri berlabel acuan awal, bagian berubah, pasangan tetap. |
| Replacement alt guidance | Describe the actual visible perencanaan subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Ritme panel railing pada bordes: membaca jeda di antara dua arah tangga](https://cuttinglaserlampung.com/artikel/ritme-panel-railing-pada-bordes/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/ritme-panel-railing-pada-bordes.svg |
| Repository file | public/media/articles/ritme-panel-railing-pada-bordes.svg |
| Suggested real photo | Foto tangga yang diizinkan untuk dokumentasi dengan bordes terlihat jelas dan sketsa motif diberi label konsep. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial railing: tiga studi geometri berlabel arah naik, jeda bordes, arah berikutnya. |
| Replacement alt guidance | Describe the actual visible railing subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Ruang jari dan label pada insert spons: membuat isi mudah diambil dan dikembalikan](https://cuttinglaserlampung.com/artikel/ruang-jari-dan-label-insert-spons/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/ruang-jari-dan-label-insert-spons.svg |
| Repository file | public/media/articles/ruang-jari-dan-label-insert-spons.svg |
| Suggested real photo | Foto demonstrasi pengambilan benda dari prototipe insert dengan persetujuan orang yang tangannya terlihat. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial spons & foam: tiga studi geometri berlabel akses tangan, identitas rongga, posisi kembali. |
| Replacement alt guidance | Describe the actual visible spons & foam subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Ruang negatif pada ornamen berlapis: membedakan bentuk, bukaan, dan bayangan](https://cuttinglaserlampung.com/artikel/ruang-negatif-pada-ornamen-berlapis/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/ruang-negatif-pada-ornamen-berlapis.svg |
| Repository file | public/media/articles/ruang-negatif-pada-ornamen-berlapis.svg |
| Suggested real photo | Foto model lapisan ornamen terpisah dan tergabung, dengan bahan peraga serta status konsep dinyatakan jelas. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial ornamen lampung: tiga studi geometri berlabel bentuk tersisa, bukaan nyata, lapisan belakang. |
| Replacement alt guidance | Describe the actual visible ornamen lampung subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Sambungan acrylic terlihat dari mana? Menentukan standar tampilan sebelum perakitan](https://cuttinglaserlampung.com/artikel/sambungan-acrylic-dan-bekas-lem/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/sambungan-acrylic-dan-bekas-lem.svg |
| Repository file | public/media/articles/sambungan-acrylic-dan-bekas-lem.svg |
| Suggested real photo | Foto sambungan sudut dari sampel acrylic nyata pada latar terang dan gelap dengan pencahayaan konsisten. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial acrylic / akrilik: tiga studi geometri berlabel pertemuan bidang, arah pengamatan, sampel sudut. |
| Replacement alt guidance | Describe the actual visible acrylic / akrilik subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Sambungan bongkar pasang MDF: menyiapkan pasangan dan frekuensi penggunaan](https://cuttinglaserlampung.com/artikel/sambungan-bongkar-pasang-mdf/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/sambungan-bongkar-pasang-mdf.svg |
| Repository file | public/media/articles/sambungan-bongkar-pasang-mdf.svg |
| Suggested real photo | Foto prototipe sambungan MDF dengan perangkat pasangan dan nomor bagian, tanpa klaim kekuatan dari foto. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial mdf / hmr: tiga studi geometri berlabel papan pasangan, perangkat sambung, siklus rakitan. |
| Replacement alt guidance | Describe the actual visible mdf / hmr subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Signage siang dan malam: menguji keterbacaan tanpa mengubah identitas logo](https://cuttinglaserlampung.com/artikel/signage-siang-malam-tanpa-mengubah-logo/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/signage-siang-malam-tanpa-mengubah-logo.svg |
| Repository file | public/media/articles/signage-siang-malam-tanpa-mengubah-logo.svg |
| Suggested real photo | Dua foto papan nama yang diizinkan pada posisi sama di siang dan malam, dengan waktu serta kondisi lampu dicatat. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial huruf & signage: tiga studi geometri berlabel kondisi siang, kondisi malam, identitas tetap. |
| Replacement alt guidance | Describe the actual visible huruf & signage subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Skala motif dan pembagian panel: merancang pola pada bidang nyata](https://cuttinglaserlampung.com/artikel/skala-motif-dan-pembagian-panel/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/skala-motif-dan-pembagian-panel.svg |
| Repository file | public/media/articles/skala-motif-dan-pembagian-panel.svg |
| Suggested real photo | Dokumentasi nyata yang diizinkan dan relevan dengan skala motif dan pembagian panel: merancang pola pada bidang nyata. Tampilkan konteks serta detail yang dijelaskan, tanpa klaim proyek yang belum diverifikasi. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial proses & desain: tiga studi geometri berlabel ukuran motif, jumlah ulang, sambungan modul. |
| Replacement alt guidance | Describe the actual visible proses & desain subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Sudut dalam CNC: mengapa gambar persegi perlu dibaca bersama pasangan komponen](https://cuttinglaserlampung.com/artikel/sudut-dalam-cnc-dan-bentuk-pasangan/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/sudut-dalam-cnc-dan-bentuk-pasangan.svg |
| Repository file | public/media/articles/sudut-dalam-cnc-dan-bentuk-pasangan.svg |
| Suggested real photo | Foto sampel sudut dalam hasil routing dan komponen pasangannya yang menunjukkan perbedaan geometri. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial cnc router: tiga studi geometri berlabel sudut gambar, ruang alat, bentuk pasangan. |
| Replacement alt guidance | Describe the actual visible cnc router subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Template penempatan huruf: menjaga jarak dan garis dasar pada dinding nyata](https://cuttinglaserlampung.com/artikel/template-penempatan-huruf-pada-dinding/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/template-penempatan-huruf-pada-dinding.svg |
| Repository file | public/media/articles/template-penempatan-huruf-pada-dinding.svg |
| Suggested real photo | Foto template huruf contoh pada bidang peraga atau dinding yang diizinkan, tanpa melakukan pengeboran untuk dokumentasi. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial huruf & signage: tiga studi geometri berlabel susunan final, garis dasar, acuan dinding. |
| Replacement alt guidance | Describe the actual visible huruf & signage subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Tepi MDF sebelum finishing: menentukan sisi terlihat dan sampel pertemuan](https://cuttinglaserlampung.com/artikel/tepi-mdf-sebelum-finishing/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/tepi-mdf-sebelum-finishing.svg |
| Repository file | public/media/articles/tepi-mdf-sebelum-finishing.svg |
| Suggested real photo | Foto sampel MDF yang memperlihatkan muka, tepi, dan sudut setelah sistem finishing yang identitasnya dicatat. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial mdf / hmr: tiga studi geometri berlabel muka panel, tepi terbuka, pertemuan sudut. |
| Replacement alt guidance | Describe the actual visible mdf / hmr subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Transisi panel fasad di sudut bangunan: meneruskan ritme atau memberi jeda](https://cuttinglaserlampung.com/artikel/transisi-panel-fasad-di-sudut-bangunan/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/transisi-panel-fasad-di-sudut-bangunan.svg |
| Repository file | public/media/articles/transisi-panel-fasad-di-sudut-bangunan.svg |
| Suggested real photo | Foto sudut bangunan yang menjadi lokasi rencana dan sketsa dua alternatif berlabel ilustrasi konsep. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial fasad / facade: tiga studi geometri berlabel bidang pertama, garis sudut, bidang kedua. |
| Replacement alt guidance | Describe the actual visible fasad / facade subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Uji kecocokan insert spons: memeriksa pasangan benda tanpa menganggapnya uji perlindungan](https://cuttinglaserlampung.com/artikel/uji-kecocokan-spons-untuk-produk/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/uji-kecocokan-spons-untuk-produk.svg |
| Repository file | public/media/articles/uji-kecocokan-spons-untuk-produk.svg |
| Suggested real photo | Foto sampel insert dengan benda dan wadah yang menjadi pasangan aktual, disertai lembar hasil pemeriksaan. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial spons & foam: tiga studi geometri berlabel benda dan rongga, wadah tertutup, catatan pengujian. |
| Replacement alt guidance | Describe the actual visible spons & foam subject and its relationship to this article’s decision; omit unsupported project claims. |

## [Vektor atau bitmap: mengenali file yang benar-benar memiliki jalur potong](https://cuttinglaserlampung.com/artikel/vector-vs-bitmap-untuk-cutting/)

| Field | Value |
|---|---|
| Current dummy asset | /media/articles/vector-vs-bitmap-untuk-cutting.svg |
| Repository file | public/media/articles/vector-vs-bitmap-untuk-cutting.svg |
| Suggested real photo | Tangkapan layar milik sendiri yang memperlihatkan foto referensi dan kontur vektor terpilih, tanpa data pelanggan. |
| Recommended ratio | 2:1; current 1200 × 600 |
| Current alt | Ilustrasi editorial proses & desain: tiga studi geometri berlabel piksel referensi, kontur vektor, bidang terpotong. |
| Replacement alt guidance | Describe the actual visible proses & desain subject and its relationship to this article’s decision; omit unsupported project claims. |
