// state.js — satu objek state dan fungsi pengubahnya.
// Setiap perubahan ditulis sebagai fungsi di sini, dan fungsi itu memanggil render.
import { daftarProyek } from "./data.js";
import { render } from "./dom.js";

export const state = {
  daftarProyek,            // data proyek, dari data.js
  kategoriAktif: "semua",  // satu-satunya sumber kategori yang dipilih
  notisia: [],             // data dari API
  statusNotisia: "memuat", // "memuat" | "siap" | "galat"
  pesanGalat: "",
};

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
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