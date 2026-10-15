// state.js — satu objek state dan fungsi pengubahnya. Tidak menyentuh halaman.
import { daftarProyek } from "./data.js";

export const state = {
  daftarProyek,          // data proyek, diambil dari data.js
  kategori: "semua",     // filter yang sedang dipilih
  notisia: [],           // data dari API
  statusNotisia: "memuat", // "memuat" | "siap" | "galat"
  pesanGalat: "",
};

export function ubahKategori(kategori) {
  state.kategori = kategori;
}

export function proyekTerpilih(s = state) {
  return s.daftarProyek.filter(
    (proyek) => s.kategori === "semua" || proyek.kategori === s.kategori
  );
}

export function isiNotisia(daftar) {
  state.notisia = daftar;
  state.statusNotisia = "siap";
}

export function catatGalat(pesan) {
  state.statusNotisia = "galat";
  state.pesanGalat = pesan;
}