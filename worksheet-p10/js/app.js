import { ambilNotisia } from "./api.js";

export const profil = {
  nama: "Fathin Nishrina Nurul Auliya",
  peran: "Mahasiswa Informatika yang belajar front-end",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

const jumlahProyek = 3;

const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;
console.log(kalimat);

console.log(typeof profil.nama);   // "string"
console.log(typeof jumlahProyek);  // "number"

// 1. Menyusun kalimat perkenalan dari satu object
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// 2. Merapikan daftar keahlian menjadi satu baris teks
const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

export const daftarProyek = [
  {
    judul: "Halaman Profil",
    tahun: 2026,
    selesai: false,
    kategori: "web"
  },
  {
    judul: "Website Media Komunikasi",
    tahun: 2026,
    selesai: false,
    kategori: "web"
  }
];

// Yang harus tercetak di Console
console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const katalog = daftarProyek.find((proyek) => proyek.judul === "Katalog Produk");
console.log(katalog);

const judulProyek = daftarProyek.map((proyek) => proyek.judul);
console.table(judulProyek);

const urutTerbalik = [...daftarProyek].sort((a, b) => b.judul.localeCompare(a.judul));
console.table(urutTerbalik);

console.log(daftarProyek[0].judul); // data asli tetap "Halaman Profil"

const wadah = document.querySelector('#daftar-notisia');

function gambar(daftar) {
  wadah.textContent = '';
  daftar.forEach(function (n) {
    const kartu = document.createElement('article');
    const judul = document.createElement('h3');
    judul.textContent = n.title;
    kartu.appendChild(judul);
    wadah.appendChild(kartu);
  });
}

async function tampilkan() {
  wadah.textContent = 'Memuat...';
  try {
    const daftar = await ambilNotisia();
    if (daftar.length === 0) {
      wadah.textContent = 'Belum ada notisia';
      return;
    }
    gambar(daftar.slice(0, 5));
  } catch (galat) {
    wadah.textContent = 'Gagal memuat data: ' + galat.message;
  }
}

tampilkan();
