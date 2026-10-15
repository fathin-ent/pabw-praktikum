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

### C. dua fungsi murni

#### `buatPerkenalan({ nama, peran })`
- Bentuk: deklarasi `function`
- Parameter: satu objek berisi `nama` dan `peran`
- Return: teks perkenalan, contoh `"Ayu — mahasiswa"`

#### `formatKeahlian(daftar)`
- Bentuk: arrow function
- Parameter: array keahlian
- Return: satu baris teks, contoh `"HTML · CSS · JavaScript"`

#### Kenapa keduanya fungsi murni
- Hasilnya hanya bergantung pada argumen.
- Tidak mengubah variabel di luar fungsi dan tidak memanggil `console.log` di dalamnya.
- Dipanggil dua kali dengan argumen sama, hasilnya sama.

##### Hasil uji di Console
| Pemanggilan | Hasil |
|---|---|
| `buatPerkenalan({ nama: "Ayu", peran: "mahasiswa" })` | Ayu — mahasiswa |
| `buatPerkenalan({ nama: "Budi", peran: "desainer" })` | Budi — desainer |
| `formatKeahlian(["Git", "Figma"])` | Git · Figma |

### D. data halaman jadi array of object

 Data yang dipakai
- profil : object berisi nama, peran, dan keahlian (array teks).
- daftarProyek : array of object, setiap isinya punya judul, tahun, dan selesai.

 Method array yang dipakai
| Method | Dikembalikan | Dipakai di proyek ini untuk |
|---|---|---|
| filter | Array baru, bisa lebih pendek | Menyaring proyek yang selesai |
| find | Satu isi atau undefined | Mengambil proyek "Katalog Produk" |
| map | Array baru, panjang sama | Mengambil daftar judul proyek |

### E. membaca galat

Cara saya membaca pesan galat :
Dari baris pertama pesan: apa yang salah, di berkas mana, baris berapa.
Alat yang dipakai: `console.log`, `console.table`, `console.error`, dan breakpoint di DevTools → Sources.

Catatan galat yang saya temui
| Pesan galat | Baris | Sebabnya | Yang saya ubah |
|---|---|---|---|
| Uncaught ReferenceError: profil is not defined | VM162:1 | Variabel di dalam module tidak bisa diakses dari Console | Pindahkan pemanggilan ke app.js |

### Catatan penggunaan AI
1. memperjelas langkah-langkah yang saya kurang paham
2. memberikan saran isi README untuk beberapa bagian

## Worksheet P9 — DOM, Event, dan Interaktivitas

### Lembar A — Memilih elemen
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

### Lembar B — Menyusun elemen dari data
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

### Lembar C — Satu pendengar untuk semua tombol
- Pendengar klik dipasang sekali di induk `#filter` (event delegation), bukan di tiap tombol.
- `event.target.closest("button")` dipakai untuk memastikan yang diklik adalah tombol.
- Kategori dibaca dari `tombol.dataset.kategori`, lalu data disaring dengan `filter`.
- Tombol aktif ditandai dengan `classList.toggle("aktif", ...)`; tampilannya diatur di CSS.

### D. Pola render dan validasi form
1. perbarui fungsi render di dom.js untuk mencegah pengulangan elemen
2. memeriksa hasil kerja saya pada form, dan semuanya terpenuhi sesuai hasil yang benar ini pada bagian D.3

### E. Membaca gejala bukan menebak
tidak ada error dalam pengerjaan ini, adanya karena salah penulisan aja.
| Gejala yang Dilihat | Sebabnya | Baris yang Diubah |
| --- | --- | --- |
| Daftar kosong tanpa penjelasan / pesan kosong tidak muncul | Karena salah penulisan antara _ dan – di dalam profil.html | Mengganti dari _ ke - |

### Deklarasi Penggunaan AI
- Menjelaskan isi lembar A dan B dan urutan langkah pengerjaannya.
- Memberi kerangka kode awal (`buatKartu`, `export`/`import`, pengosongan wadah) yang kemudian saya ketik, jalankan, dan periksa sendiri di Console.
- Membantu membaca pesan galat dan menyusun kerangka README ini.
- mengisi readme untuk bagian a-c karena yang awalnya saya isi sendiri tiba tiba hilang

### Saya kerjakan sendiri:
- Mengisi data profil dan proyek dengan data saya.
- Menyesuaikan `id` dan `data-kategori` dengan `profil.html` saya.
- Menjalankan halaman, memeriksa hasil di Console dan panel Elements, serta mengisi tabel hasil.
- Menulis & Mengedit Kode
- Pengujian (Testing)
- Navigasi & Inspecting
- Pengelolaan Git & GitHub
- Penilaian & Refleksi

## P.10 - JavaScript Asinkron: fetch, promise, dan JSON

### A. panggilan pertama dan status balasan
1. menetapkan alamat di satu tempat : membuat file api.js, menggunakan alamat API publik dan berbentuk daftar yang cocok dijadikan kartu dengan ketetapan memakai https, tanpa kunci akses, alamat hanya ditulis sekali di api.js
2. menambahkan fungsi muat() di api.js, dengan tambahan kata export menurut saran AI
3. satu baris pemanggil di app.js
4.
|Yang dicatat	| Nilai yang saya dapat|
|---|---|
|Alamat API yang saya pakai	|https://jsonplaceholder.typicode.com/posts|
|Status balasan (200, 404, dan seterusnya)	|200|
|Nilai respons.ok	|200OK|
|Jenis isi (Content-Type)|	application/json; charset=utf-8|

## 📌 Deskripsi Pekerjaan
Pekerjaan ini berfokus pada implementasi konsep JavaScript Asinkron (Async/Await & Promise) untuk mengambil data dari REST API publik, mengurai data format JSON, serta memisahkan lapisan data (*Data Layer*) dari lapisan tampilan (*UI Layer*).

### Fitur & Capaian Pembelajaran:
1. **Pemisahan Lapisan Kode**: Menempatkan logika `fetch` di dalam berkas `js/api.js` dan mengekspor fungsi `ambilNotisia()`, sehingga `js/app.js` hanya memanggil fungsi tanpa menangani alamat API secara langsung.
2. **Pemeriksaan Respon HTTP**: Memeriksa `respons.ok` sebelum membaca *body* untuk menangani galat status HTTP seperti `404` atau `500`.
3. **Penanganan Galat Sempurna**: Menggunakan dua lapis `try/catch` untuk menangkap galat jaringan atau status HTTP gagal, lalu menampilkan pesan galat langsung ke halaman HTML (bukan sekadar di Console).
4. **4 Keadaan Antarmuka (UI States)**:
   * **Memuat (*Loading*)**: Menampilkan indikator "Memuat..." saat menunggu data.
   * **Berhasil (*Success*)**: Merender data postingan/notisia menjadi elemen kartu di HTML.
   * **Gagal (*Error*)**: Menampilkan pesan error jika terjadi galat jaringan atau HTTP status non-2xx.
* **Kosong (*Empty*)**: Menampilkan pesan "Belum ada notisia" jika balasan API berupa larik kosong (`[]`).

---

## 🌐 API & Peta Data

* **Endpoint API**: `https://jsonplaceholder.typicode.com/posts`
* **Status HTTP Normal**: `200 OK`
* **Content-Type**: `application/json; charset=utf-8`

### Struktur Data API
| Nama Kunci (Key) | Tipe Data & Contoh | Cara Akses Kode |
| :--- | :--- | :--- |
| `data[0]` | Object `{ userId: 1, id: 1, title: "...", body: "..." }` | `data[0]` |
| `data` | Array (100 item) | `data.forEach(...)` |
| `title` | String | `item.title` (atau dipetakan sebagai judul notisia) |
| `id` | Number | `item.id` |

---

## 🛠️ Kendala & Penanganan (Kasus Sulit)

Selama proses pengerjaan, beberapa kendala teknis berhasil diidentifikasi dan ditangani:

1. **Galat `TypeError: Cannot set properties of null` pada `app.js`**:
   * *Penyebab*: Fungsi `mulai()` mencoba mengakses `#pesan-galat` yang tidak ada di HTML.
   * *Solusi*: Menghapus fungsi `mulai()` dan memusatkan alur pengoperasian di fungsi `tampilkan()`.
2. **Bentrok Penggambaran Kartu**:
   * *Penyebab*: Fungsi `gambar()` menyasar kontainer `#daftar` yang bentrok dengan daftar proyek dari Pertemuan 9.
   * *Solusi*: Mengubah target selector di DOM menjadi `#daftar-notisia`.
3. **Penanganan Favicon 404**:
   * *Penyebab*: Browser otomatis meminta `favicon.ico` yang tidak tersedia.
   * *Solusi*: Menambahkan `<link rel="icon" href="data:,">` pada tag `<head>` di `profil.html`.
4. **Masalah Git Lock & Push Rejected**:
   * *Penyebab*: Adanya sisa file `.git/index.lock` dan repo GitHub yang memiliki commit lebih baru dibanding local repo.
   * *Solusi*: Menghapus file lock dengan `rm -f .git/index.lock`, diikuti dengan `git pull --no-rebase origin main` sebelum melakukan `git push`.

---

## 📸 Bukti Keadaan Antarmuka (Screenshots)

Bukti tangkapan layar untuk 4 kondisi antarmuka disimpan di dalam repositori:
* `berhasil.png` — Menampilkan daftar notisia dari API dengan sukses.
* `Gagal.png` — Menampilkan pesan error saat API diblokir atau alamat salah.
* `Memuat…png` — Menampilkan indikator saat koneksi diperlambat (Network Throttling 3G).

---

## 🤖 Deklarasi Penggunaan AI 

* **Bagian yang Dibantu AI**:
  * Penelusuran galat (*debugging*) untuk isu `.git/index.lock` dan penyesuaian penanganan `textContent` null pada elemen HTML.
  * Pembuatan kerangka dokumentasi `README.md`.
* **Bagian yang Dikerjakan Mandiri**:
  * Seluruh struktur HTML (`profil.html`), perbaikan CSS, implementasi `async/await` pada `js/api.js`, pengisian jawaban serta analisis mandiri pada worksheet Pertemuan 10.

## P 11 - modul, state, penyimpanan klien
---

## 📌 Deskripsi Pekerjaan & Refactoring Modul
Pada tugas Pertemuan 11 ini, fokus utama adalah melakukan refactoring (pemecahan) berkas JavaScript monolithic menjadi modul-modul terpisah (*Single Responsibility Principle*), mengelola *state* terpusat, serta mengintegrasikan *data layer* dari Pertemuan 10 tanpa merusak fitur antarmuka yang ada.

### Audit Berkas Awal
* **`profil.html`**: Ada (248 baris)
* **CSS (6 berkas)**: Ada (Base: 28, Komponen: 168, Layout: 61, Responsive: 23, Tema: 64, Tokens: 39)
* **`js/app.js`**: Ada (59 baris awal, diekspansi untuk perakit modul)
* **`js/dom.js`**: Ada (49 baris awal, dipilah untuk sentuhan DOM murni)
* **`js/api.js`**: Dipertahankan dari Pertemuan 10 untuk menangani pemanggilan API (fetch & async/await).

---

## 🧩 Susunan & Tanggung Jawab Modul (`js/`)

Aplikasi dipecah menjadi beberapa modul dengan pembagian tugas yang jelas:

| Berkas Modul | Tanggung Jawab | Asal Pemindahan Kode |
| :--- | :--- | :--- |
| **`js/data.js`** | Data mentah dan fungsi murni pemformat (*pure functions*). | Objek `profil`, array `daftarProyek`, fungsi `buatPerkenalan()`, dan `formatKeahlian()` dari `app.js`. |
| **`js/state.js`** | Objek *state* tunggal dan fungsi pengubahnya. | Pengelolaan keadaan filter kategori (`state = { kategori: "semua" }`), fungsi `ubahKategori()`, dan `proyekTerpilih()`. |
| **`js/dom.js`** | Seluruh manipulasi DOM murni (pemilih, render elemen, pengelolaan kelas). | Fungsi `buatKartu()`, `render()`, `tandaiTombolAktif()`, dan penggambar `#daftar-notisia`. |
| **`js/events.js`** | Pemasangan seluruh pendengar peristiwa (*event listeners*). | Pengelolaan blok `addEventListener("click", ...)` untuk filter kategori yang dipisahkan dari `dom.js`. |
| **`js/api.js`** | Lapisan data luar (*API Fetcher*). | Fungsi `ambilNotisia()` dari Pertemuan 10 untuk mengambil data asinkron dari REST API. |
| **`js/app.js`** | Perakitan utama (*App Entry Point*). | Mengimpor seluruh modul, memanggil `ambilNotisia()`, mengeksekusi render awal `render(state)`, dan mengaktifkan event listener. |

---

## 📊 Analisis Sentuhan DOM Sebelum Refactoring
Sebelum dilakukan pemisahan modul, dihitung baris kode yang secara langsung melakukan manipulasi DOM (`querySelector`, `createElement`, `append`, `classList`, `textContent`):

* **`js/app.js`**: 15 baris menyentuh DOM dari total 88 baris.
* **`js/dom.js`**: 16 baris menyentuh DOM dari total 47 baris.

---
## 🛠️ Implementasi Modul & ES6 Import/Export

### 1. Struktur Import & Export Modul (`js/`)
Semua pemanggilan modul menggunakan jalur relatif yang diwakili oleh `./` dan wajib menggunakan ekstensi `.js`.

* **`js/data.js`**: Menyimpan data mentah (`daftarProyek`, `profil`) dan fungsi murni pemformat (`buatPerkenalan`, `formatKeahlian`).
* **`js/state.js`**: Menyimpan objek *state* terpusat dan fungsi pengubahnya (`state = { ... }`).
* **`js/events.js`**: Menangani seluruh pemasangan *event listener* interaksi pengguna.
* **`js/dom.js`**: Menangani manipulasi DOM, pemilih elemen, dan fungsi penggambar (*render*).
* **`js/api.js`**: Lapisan data luar dari Pertemuan 10 yang menangani pemanggilan API asinkron (`fetch`).
* **`js/app.js`**: Titik masuk utama aplikasi (*entry point*) yang merakit dan mengimpor modul lain.

### 2. Penyesuaian `profil.html`
Mengubah pemanggilan skrip menjadi modul ES6 agar peramban dapat mengenali sintaks `import`/`export`:
```html
<!-- profil.html -->
<script type="module" src="js/app.js"></script>
---
## 💾 Lembar D — Halaman yang Mengingat Pilihan

Bagian ini mendokumentasikan implementasi `localStorage` untuk menyimpan pilihan terakhir pengguna agar tetap bertahan meskipun halaman dimuat ulang (*refresh*) atau tab ditutup.

---

### D.1 Fungsi Utama `localStorage`

| Perintah | Perannya | Kapan Dijalankan |
| :--- | :--- | :--- |
| `localStorage.setItem(...)` | Menyimpan teks dengan satu nama kunci | Sesudah keadaan berubah dan sebelum render |
| `localStorage.getItem(...)` | Membaca kembali; `null` bila belum pernah disimpan | Sekali saja, saat halaman pertama dimuat |
| `JSON.stringify(objek)` | Mengubah objek menjadi teks | Seluruh isi yang berupa objek atau array |
| `JSON.parse(teks)` | Mengubah teks kembali menjadi objek | Segera sesudah membaca, dibungkus `try/catch` |
| `localStorage.removeItem(...)` | Menghapus simpanan | Tombol atur ulang |

---

### D.2 Nilai Bawaan pada Kunjungan Pertama

| Keadaan | Nilai Bawaan | Alasan |
| :--- | :--- | :--- |
| **Kategori Aktif** | `"semua"` | Pengunjung pertama harus melihat semua proyek, bukan daftar yang sudah tersaring atau kosong. |
| **Urutan Tampilan** | `"asli"` | Mengikuti urutan di `data.js` dan tidak mengubah data apa pun. |

---

### D.3 Batas Penyimpanan Klien

| Batas | Artinya | Akibatnya bagi Pekerjaan Anda |
| :--- | :--- | :--- |
| **Hanya teks** | Angka, objek, dan array harus diubah lebih dulu | Selalu lewat JSON sebelum disimpan |
| **Sekitar 5 MB per alamat** | Batasnya per alamat, bukan per berkas | Simpan pilihan, bukan gambar atau data besar |
| **Sinkron dan menghambat** | Membaca dan menulis menahan halaman sejenak | Jangan menyimpan pada setiap ketikan |
| **Tidak terenkripsi** | Isinya bisa dibaca siapa pun yang memakai komputer itu | Jangan simpan token, kata sandi, atau data pribadi |
| **Terikat alamat** | Simpanan satu alamat tidak terlihat oleh alamat lain | Simpanan hilang bila nomor port server lokal berubah |

---

### D.4 Evaluasi Data yang Disimpan dan Dibatasi

| Keadaan | Disimpan? | Alasan |
| :--- | :--- | :--- |
| **Kategori aktif** | Ya | Pilihan kecil dan tidak sensitif, dan lebih nyaman kalau diingat saat halaman dibuka lagi. |
| **Kata kunci pencarian** | Tidak | Bersifat sementara dan bisa berisi hal pribadi. Menyimpannya juga berarti menulis ke penyimpanan yang sinkron pada setiap ketikan. |
| **Token atau data pribadi** | Tidak | Tidak terenkripsi dan bisa dibaca siapa pun. |
---
## 🛡️ Lembar E — Simpanan Bisa Rusak, Siapkan Jalan Pulang

Bagian ini mendokumentasikan mekanisme penanganan kerusakan data pada penyimpanan lokal (`localStorage`) serta hasil pengujian langsung dari Console.

---

### E.1 Tiga Cara Simpanan Menjadi Rusak
* **Simpanan Rusak / Null**: Dibungkus dengan `try/catch`. Jika isi simpanan bukan JSON yang sah (`JSON.parse` melempar galat), simpanan dibuang dan aplikasi beralih ke nilai bawaan.
* **Versi Skema Lama**: Menyertakan variabel `VERSI` pada data simpanan. Jika versi simpanan di `localStorage` tidak cocok dengan versi aplikasi saat ini, simpanan dibuang via `localStorage.removeItem()`.
* **Data Tergoda Disimpan**: Hanya menyimpan pilihan/tampilan interaktif, serta tidak menyimpan data pribadi atau kredensial sensitif.

---

### E.2 Penanganan Nomor Versi pada Fungsi `muat()`
Fungsi `muat()` pada `js/state.js` dilengkapi pengecekan versi dan pembungkus galat agar aplikasi tidak mengalami *crash*:

```javascript
export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI); // buang versi lama
      return null;
    }
    return isi;
  } catch {
    localStorage.removeItem(KUNCI); // buang isi rusak
    return null;
  }
}
---

## 🤖 Deklarasi AI (AI Disclosure)
* **Bagian yang Dibantu AI**: Penyusunan dokumentasi `README.md`, verifikasi struktur modul ES6 (`import`/`export`), dan pembagian tabel tanggung jawab berkas.
* **Bagian yang Dikerjakan Mandiri**: Pemisahan kode JavaScript ke dalam masing-masing berkas modul (`data.js`, `state.js`, `dom.js`, `events.js`, `app.js`), pengujian di localhost server, dan pemastian fungsionalitas filter antarmuka.

 



  

