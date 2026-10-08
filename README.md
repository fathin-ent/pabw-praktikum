<img width="468" height="19" alt="image" src="https://github.com/user-attachments/assets/30045eb6-9119-4a1b-bdf9-3691a5419e5b" /># PABW — Fathin Nishrina Nurul Auliya — 25523256

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
6. merapihkan tabel dan kontak melalui css

## Pertemuan 5 — Tata letak: flexbox dan grid

### Sketsa kerangka halaman

| Bagian halaman | Peran | Nilai yang saya pakai |
|---|---|---|
| Baris pertama | Kepala halaman: logo, judul, menu | auto (tinggi mengikuti isi) |
| Baris kedua | Isi: sidebar dan konten | 1fr (mengisi sisa tinggi) |
| Baris ketiga | Kaki halaman | auto (tinggi mengikuti isi) |
| Kolom isi | Sidebar tetap, konten lentur | 16rem 1fr (sidebar tetap) |

### Sumbu dan arah

| Komponen | Arah | Sumbu utama | Sumbu silang |
|---|---|---|---|
| Navbar | baris | horizontal | vertikal |
| Baris tombol pada kartu | baris | horizontal | vertikal |
| Daftar menu samping | kolom | vertikal | horizontal |

### menentukan flex/grid

| Bagian | Pilihan | Alasan |
|---|---|---|
| Kepala halaman | flex | Isinya satu baris sejajar |
| Isi dua kolom | grid | Lebar kolom ditentukan dari wadah, bukan dari isinya. |
| Galeri kartu | grid | Kolom otomatis menyesuaikan lebar layar dengan auto-fit. |
| Isi di dalam satu kartu | flex | Isinya berjajar dari atas ke bawah. |

### memasukkan css galeri adaptif dan isi kartu
Pada bagian komponen, digunakan CSS Grid untuk membuat galeri yang adaptif dan Flexbox untuk mengatur isi di dalam kartu. Penggunaan
repeat(auto-fit, minmax(16rem, 1fr)) memungkinkan jumlah kolom galeri menyesuaikan ukuran layar tanpa perlu membuat aturan media query tambahan.

### Penempatan span dan area bernama
| Blok | Cara | Potongan Kode |
|---|---|---|
| Kartu video di galeri karya| span | .galeri li:first-child {..|
| Kerangka halaman (page)| area bernama | .page {.. |

### Pengecekan tinggi kartu dan isi panjang mendorong kolom
- memasukkan tinggi minimum agar tinggi kartu mengikuti panjang isinya.
- memberi izin menyusut, sehingga teks membungkus alih-alih melebarkan kolom.
Kesimpulan pengecekan : tidak ada elemen yang melewati tepi kanan, tidak ada scroll horizontal muncul. Perbaikan min-width: 0 dari E.2 sudah bekerja.

### Hasil pengecekan
masih ada margin di komponen.css

## Catatan penggunaan AI
1. penulisan html untuk css nya
2. cara penggunaan git hub lewat terminal
3. memperbaiki kode
4. memperjelas langkah-langkah yang saya kurang paham

## Pertemuan 6 - Responsif Mobile-First

### A.	Pasang viewport dan cari lebar tetap
- Baris meta viewport, dengan nilai :
| Nilai | artinya |
|---|---|---|
| width=device-width| lebar halaman mengikuti lebar layar perangkat|
| initial-scale=1.0| perbesaran awal memakai ukuran asli |
- Menentukan elemen ke lebar yang tetap
  komponen.css fieldset button : margin-left: 180px ->	margin-left: 10rem

### B. Gaya dasar untuk layar sempit
1. menambahkan responsif.css
2. tambahkan class baru di profil.html, mengubah jadi <div class="isi content"> dan <ul class="galeri grid"> agar tingkat kekhususannya (specificity) sama.

### C. Tambah 2 titik henti
- Titik henti pertama menambah kolom pada galeri, titik henti kedua menyandingkan sidebar dengan konten. Keduanya ditulis sebagai tambahan, sehingga gaya dasar untuk layar sempit tetap berlaku.
- keputusan titik henti saya:
  1. 48 rem di galeri dari 1 kolom -> 2 kolom, karena Di lebar ini (~768px, ukuran umum tablet) ruang sudah cukup menampung dua kartu berdampingan
  2. 60rem, sidebar berdampingan dengan konten, karena masih cukup lebar untuk membaca konten dengan nyaman

### D. Gambar, Tabel, dan Teks
Gambar dibatasi dengan max-width 100%, bukan diberi lebar tetap. Tabel lebar diberi wadah yang dapat digulir sendiri. Ukuran teks memakai rem supaya ikut membesar saat pengguna memperbesar huruf.

## Pertemuan 8 - Membuat Halaman Profil yang Datanya Bergerak

### A. Hubungkan skrip ke halaman
Tulis tepat satu baris <script> sebelum </body>, <script type="module" src="js/app.js"></script>. 
  1. type = "module" -> Menyalakan aturan modul: nama variabel tidak bocor ke jendela peramban, dan import/export bisa dipakai
  2. src="js/app.js" -> Menunjuk berkas skrip yang Anda tulis, relatif terhadap profil.html
  3. Letak sebelum <body> -> Elemen halaman sudah ada saat skrip membaca DOM

### B. Data profil yang jadi variable

Pakai const bila nilai itu tidak akan ditunjuk ulang; pakai let hanya bila Anda memang akan mengubahnya. 

Template literal : menyusun kalimat dari nilai 
Untuk menyambung teks dengan tanda + cepat, Template literal memakai tanda petik miring (backtick) dan menaruh nilai di dalam ${ } 

| data | nama variable | isi |
|---|---|---|
| Nama lengkap | profil.nama | Fathin Nishrina Nurul Auliya |
| Kalimat peran | profil.peran | Mahasiswa Informatika yang belajar front-end |
| Daftar keahlian | Profil.keahlian | [“HTML”, “CSS”, “JavaSript” ] | 
| Satu nilai angka yang dipakai | jumlahProyek | 3 |

## C. dua fungsi murni

### `buatPerkenalan({ nama, peran })`
- Bentuk: deklarasi `function`
- Parameter: satu objek berisi `nama` dan `peran`
- Return: teks perkenalan, contoh `"Ayu — mahasiswa"`

### `formatKeahlian(daftar)`
- Bentuk: arrow function
- Parameter: array keahlian
- Return: satu baris teks, contoh `"HTML · CSS · JavaScript"`

### Kenapa keduanya fungsi murni
- Hasilnya hanya bergantung pada argumen.
- Tidak mengubah variabel di luar fungsi dan tidak memanggil `console.log` di dalamnya.
- Dipanggil dua kali dengan argumen sama, hasilnya sama.

### Hasil uji di Console
| Pemanggilan | Hasil |
|---|---|
| `buatPerkenalan({ nama: "Ayu", peran: "mahasiswa" })` | Ayu — mahasiswa |
| `buatPerkenalan({ nama: "Budi", peran: "desainer" })` | Budi — desainer |
| `formatKeahlian(["Git", "Figma"])` | Git · Figma |

## D. data halaman jadi array of object

### Data yang dipakai
- profil : object berisi nama, peran, dan keahlian (array teks).
- daftarProyek : array of object, setiap isinya punya judul, tahun, dan selesai.

### Method array yang dipakai
| Method | Dikembalikan | Dipakai di proyek ini untuk |
|---|---|---|
| filter | Array baru, bisa lebih pendek | Menyaring proyek yang selesai |
| find | Satu isi atau undefined | Mengambil proyek "Katalog Produk" |
| map | Array baru, panjang sama | Mengambil daftar judul proyek |

## E. membaca galat

### Cara saya membaca pesan galat
Dari baris pertama pesan: apa yang salah, di berkas mana, baris berapa.
Alat yang dipakai: `console.log`, `console.table`, `console.error`, dan breakpoint di DevTools → Sources.

### Catatan galat yang saya temui
| Pesan galat | Baris | Sebabnya | Yang saya ubah |
|---|---|---|---|
| Uncaught ReferenceError: profil is not defined | VM162:1 | Variabel di dalam module tidak bisa diakses dari Console | Pindahkan pemanggilan ke app.js |

## Catatan penggunaan AI
1. memperjelas langkah-langkah yang saya kurang paham
2. memberikan saran isi README untuk beberapa bagian

# Worksheet P9 — DOM, Event, dan Interaktivitas

## Lembar A — Memilih elemen
- Wadah di `profil.html`: `ul#daftar` (daftar proyek), `div#filter` dengan tiga tombol `data-kategori` (semua, web, data), dan `p#pesan-kosong` yang disembunyikan dengan atribut `hidden`.
- Nilai `data-kategori` pada tombol sama persis (huruf per huruf) dengan properti `kategori` pada setiap proyek di `app.js`.
- `dom.js` dipisah dari `app.js` dan dimuat sesudahnya, keduanya `type="module"`. `app.js` meng-`export` data, `dom.js` meng-`import` data itu.
- Semua pemilih sudah diuji di Console dan tidak ada yang bernilai `null`.

### Daftar elemen yang saya isi
| Bagian halaman | Pemilih | Diisi apa | Nama variabel |
|---|---|---|---|
| Daftar proyek | `#daftar` | Kartu proyek dari `daftarProyek` | `wadah` |
| Baris tombol filter | `#filter` | Tempat pendengar klik (Lembar C) | `filter` |
| Pesan daftar kosong | `#pesan-kosong` | Muncul saat hasil filter kosong | `kosong` |
| Form dan kolomnya | (isi id form saya) | Dibaca dan divalidasi (Lembar D) | `form` |

## Lembar B — Menyusun elemen dari data
- Setiap isi `daftarProyek` dibuat menjadi satu kartu `<li class="kartu">` lewat fungsi `buatKartu(proyek)`.
- Teks diisi dengan `textContent`, bukan `innerHTML`, supaya isi data dianggap teks dan bukan HTML (menghindari XSS).
- Kartu dimasukkan ke wadah dengan `append`.
- Wadah dikosongkan dengan `wadah.textContent = ""` di baris pertama fungsi render supaya kartu tidak berlipat. *(hapus kalimat ini kalau belum memakai fungsi render)*

### Hasil pemeriksaan
| Yang diperiksa | Hasil saya |
|---|---|
| Jumlah kartu di halaman | (isi, contoh: 2, sama dengan panjang `daftarProyek`) |
| Kartu paling atas | (isi, contoh: "Halaman Profil", sama dengan data pertama) |
| Teks di dalam kartu | (isi, contoh: tampil sebagai teks biasa) |

## Lembar C — Satu pendengar untuk semua tombol
- Pendengar klik dipasang sekali di induk `#filter` (event delegation), bukan di tiap tombol.
- `event.target.closest("button")` dipakai untuk memastikan yang diklik adalah tombol.
- Kategori dibaca dari `tombol.dataset.kategori`, lalu data disaring dengan `filter`.
- Tombol aktif ditandai dengan `classList.toggle("aktif", ...)`; tampilannya diatur di CSS.

## D. Pola render dan validasi form
1. perbarui fungsi render di dom.js untuk mencegah pengulangan elemen
2. memeriksa hasil kerja saya pada form, dan semuanya terpenuhi sesuai hasil yang benar ini pada bagian D.3

## E. Membaca gejala bukan menebak
tidak ada error dalam pengerjaan ini, adanya karena salah penulisan aja.
| Gejala yang Dilihat | Sebabnya | Baris yang Diubah |
| --- | --- | --- |
| Daftar kosong tanpa penjelasan / pesan kosong tidak muncul | Karena salah penulisan antara _ dan – di dalam profil.html | Mengganti dari _ ke - |

## Deklarasi Penggunaan AI
- Menjelaskan isi lembar A dan B dan urutan langkah pengerjaannya.
- Memberi kerangka kode awal (`buatKartu`, `export`/`import`, pengosongan wadah) yang kemudian saya ketik, jalankan, dan periksa sendiri di Console.
- Membantu membaca pesan galat dan menyusun kerangka README ini.
- mengisi readme untuk bagian a-c karena yang awalnya saya isi sendiri tiba tiba hilang

## Saya kerjakan sendiri:
- Mengisi data profil dan proyek dengan data saya.
- Menyesuaikan `id` dan `data-kategori` dengan `profil.html` saya.
- Menjalankan halaman, memeriksa hasil di Console dan panel Elements, serta mengisi tabel hasil.
- Menulis & Mengedit Kode
- Pengujian (Testing)
- Navigasi & Inspecting
- Pengelolaan Git & GitHub
- Penilaian & Refleksi


 



  

