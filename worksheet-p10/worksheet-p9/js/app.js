

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

import { ambilNotisia } from "./api.js";

async function mulai() {
  const pesan = document.querySelector("#pesan-galat");
  try {
    const data = await ambilNotisia();
    console.log("jumlah data", data.length);
    console.log(data);
    console.log(data[0]);
    console.log(data[0].title);

    // Langkah 4
    console.log(data[0].id);
    console.log(data[0].title);
    console.log(data[0].body);

    pesan.hidden = true;
  } catch (galat) {
    pesan.textContent = "Data gagal dimuat: " + galat.message;
    pesan.hidden = false;
  }
}

mulai();