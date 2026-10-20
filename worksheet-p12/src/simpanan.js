// src/simpanan.js
const KUNCI = "pabw-p11";
const VERSI = 2;

export function simpan(s) {
  const isi = { versi: VERSI, kategoriAktif: s.kategoriAktif, urutan: s.urutan };
  try {
    localStorage.setItem(KUNCI, JSON.stringify(isi));
  } catch {
    // penyimpanan penuh atau diblokir: halaman tetap jalan
  }
}

export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));
    if (isi === null || typeof isi !== "object" || isi.versi !== VERSI) return null;
    return isi; // bentuk lama dibuang
  } catch {
    return null; // simpanan rusak
  }
}

export function aturUlang() {
  try {
    localStorage.removeItem(KUNCI);
  } catch {
    // diabaikan
  }
}