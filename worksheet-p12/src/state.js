// src/state.js
import { reactive } from "vue";
import { daftarProyek } from "./data.js";

export const BAWAAN = { kategoriAktif: "semua", urutan: "asli" };
export const KATEGORI_SAH = ["semua", "web", "data"];
export const URUTAN_SAH = ["asli", "terbalik"];

export const state = reactive({
  daftarProyek,
  kategoriAktif: BAWAAN.kategoriAktif,
  urutan: BAWAAN.urutan,
  notisia: [],
  statusNotisia: "memuat",
  pesanGalat: "",
});

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;      // tanpa render(), tanpa simpan()
}

export function gantiUrutan() {
  state.urutan = state.urutan === "asli" ? "terbalik" : "asli";
}

export function isiNotisia(daftar) {
  state.notisia = daftar;
  state.statusNotisia = "siap";
}

export function catatGalat(pesan) {
  state.statusNotisia = "galat";
  state.pesanGalat = pesan;
}