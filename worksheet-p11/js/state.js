// state.js — satu objek state, fungsi pengubahnya, dan penyimpanan di peramban.
// Setiap perubahan: ubah state -> simpan -> render.
import { daftarProyek } from "./data.js";
import { render } from "./dom.js";

const KUNCI = "pabw-p11";
const VERSI = 2;

// Nilai bawaan untuk kunjungan pertama (D.2)
const BAWAAN = { kategoriAktif: "semua", urutan: "asli" };
const KATEGORI_SAH = ["semua", "web", "data"];
const URUTAN_SAH = ["asli", "terbalik"];

export const state = {
  daftarProyek,                 // data proyek, dari data.js (tidak disimpan)
  kategoriAktif: BAWAAN.kategoriAktif,
  urutan: BAWAAN.urutan,
  notisia: [],                  // data dari API (tidak disimpan)
  statusNotisia: "memuat",      // "memuat" | "siap" | "galat"
  pesanGalat: "",
};

/* ---------- penyimpanan (D.1) ---------- */

export function simpan(s = state) {
  // Hanya pilihan pengguna yang perlu diingat — bukan data proyek atau notisia.
  const isi = { versi: VERSI, kategoriAktif: s.kategoriAktif, urutan: s.urutan };
  try {
    localStorage.setItem(KUNCI, JSON.stringify(isi));
  } catch {
    // penyimpanan penuh atau diblokir: halaman tetap jalan tanpa mengingat
  }
}

export function muat() {
  try {
    return JSON.parse(localStorage.getItem(KUNCI)); // null bila belum pernah disimpan
  } catch {
    return null; // simpanan rusak: pakai nilai bawaan
  }
}

export function aturUlang() {
  try {
    localStorage.removeItem(KUNCI);
  } catch {
    // diabaikan
  }
  state.kategoriAktif = BAWAAN.kategoriAktif;
  state.urutan = BAWAAN.urutan;
  render(state);
}

// Dipanggil sekali saat halaman pertama dimuat (sebelum render pertama).
export function pulihkan() {
  const tersimpan = muat();
  if (tersimpan === null || typeof tersimpan !== "object") return; // D.2: wajib periksa null

  if (KATEGORI_SAH.includes(tersimpan.kategoriAktif)) {
    state.kategoriAktif = tersimpan.kategoriAktif;
  }
  if (URUTAN_SAH.includes(tersimpan.urutan)) {
    state.urutan = tersimpan.urutan;
  }
}

/* ---------- fungsi pengubah (C.3) ---------- */

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
  simpan();
  render(state);
}

export function gantiUrutan() {
  state.urutan = state.urutan === "asli" ? "terbalik" : "asli";
  simpan();
  render(state);
}

export function isiNotisia(daftar) {
  state.notisia = daftar;
  state.statusNotisia = "siap";
  render(state);
}

export function catatGalat(pesan) {
  state.statusNotisia = "galat";
  state.pesanGalat = pesan;
  render(state);
}