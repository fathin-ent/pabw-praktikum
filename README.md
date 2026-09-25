# PABW — Fathin Nishrina Nurul Auliya — 25523256

## Pertemuan 4 — Halaman profil 

Topik halaman: profil pribadi.

- Judul halaman: Fathin Nishrina Nurul Auliya
- Deskripsi: Halo halo selamat datang di website profile saya! perkenalkan nama saya Fathin Nishrina Nurul Auliya, seorang mahasiswi di Universitas Islam Indonesia dengan jurusan Informatika. Saya berasal dari Kota Militer yaitu Cimahi, Jawa Barat. Website ini, hasil dari yang sedang saya pelajari, dibuat untuk memperkenalkan diri saya dan karya-karya yang telah saya kerjakan selama berkuliah di Universitas Islam Indonesia.
- Tautan navigasi: Tentang Saya, Karya IT, Sedang Dikerjakan, Galeri Karya, Tanya Jawab, Kontak
- Bagian utama: Tentang saya, Karya IT, Hubungi saya
- Bagian tambahan: Galeri karya, Sedang saya kerjakan, Tanya jawab 

### Arah visual halaman profil saya

Arah visual: Cerah dan ringan

- Warna utama: #8F365D (marun / merah anggur tua)   
- Warna netral terang: #EEE6DC (krem lembut)
- Warna netral gelap: #362D2B (cokelat tua gelap) dan #B8AD9F (abu-abu/cokelat medium untuk border)
- Ukuran huruf: isi 1rem, h1 2rem, h2 1.5rem
- Jarak dasar antar elemen: 1rem
- Radius sudut: 0.5rem
- Bayangan: lembut, 0 2px 8px rgba(0,0,0,0.08)

Alasan memilih arah ini: Kesan Profesional dan Hangat

## Design token halaman profil

- Berkas gaya yang akan dibuat: tokens.css, base.css, layout.css, komponen.css, tema.css
- Warna utama: #875d55 (coklat mauve hangat), dipilih karena senada dengan arah 
  visual "cerah dan ringan" saya dan cocok dipadukan dengan warna latar krem (#f3ead8)

### Token yang saya tetapkan

| Token | Nilai | Untuk apa |
|---|---|---|
| --color-bg | #EEE6DC | latar halaman |
| --color-fg | #362D2B | warna teks utama |
| --color-surface | #F6F2F0 | latar kartu dan panel |
| --color-border | #B8AD9F | garis pemisah dan tepi kotak |
| --color-primary | #8F365D | tombol, tautan, penanda |
| --color-danger | #8A0507 | peringatan dan isian tidak sah |
| --color-focus | #362D2B | garis fokus papan ketik |

## Tujuan Struktur Tambahan Halaman Profil

1. Galeri Karya (`<section id="galeri-karya">`)
   - elemen : Menggunakan elemen `<section>`, `<figure>`, `<video>`, dan `<a>`
   - untuk siapa : calon rekruter yang ingin melihat demonstrasi visual langsung dari proyek yang dibuat.
   - menjawab : Bagaimana wujud nyata dari aplikasi yang pernah dikembangkan (seperti Demo Nexsis App dan Prototipe Figma).

2. Sedang Dikerjakan (`<section id="sedang-dikerjakan">`)
   - elemen : Menggunakan elemen `<section>`, `<article>`, dan `<time>`.
   - untuk siapa : Pengunjung web, rekan tim, serta dosen pengampu.
   - menjawab : Apa fokus kegiatan dan proyek pengembangan terkini yang sedang digarap serta kapan proyek tersebut dimulai[cite: 20].

3. Tanya Jawab (`<section id="tanya-jawab">`)
   - elemen : Menggunakan elemen interaktif `<details>` dan `<summary>`[cite: 20].
   - untuk siapa : Pengunjung umum atau rekruter yang mencari informasi cepat[cite: 20].
   - menjawab : Pertanyaan umum seputar keahlian bahasa pemrograman dan pengalaman membuat proyek selama masa perkuliahan.


## Catatan penggunaan AI
1. template dan mengisi README
2. cara penggunaan GitHub
3. memperjelas langkah-langkah yang saya kurang paham
4. menyelesaikan error
5. memberikan color hex yang saya mau
