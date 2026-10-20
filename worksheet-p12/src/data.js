// data.js — data mentah dan fungsi murni pemformat. Tidak menyentuh halaman.

export const profil = {
  nama: "Fathin Nishrina Nurul Auliya",
  peran: "Mahasiswa Informatika yang belajar front-end",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

export const daftarProyek = [
  {
    judul: "Halaman Profil",
    tahun: 2026,
    selesai: false,
    kategori: "web",
  },
  {
    judul: "Website Media Komunikasi",
    tahun: 2026,
    selesai: false,
    kategori: "web",
  },
];

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");