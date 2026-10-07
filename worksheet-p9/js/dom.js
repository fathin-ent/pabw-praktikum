import { profil, daftarProyek } from "./app.js";

const daftar = document.querySelector("#daftar");
const filter = document.querySelector("#filter");
const pesanKosong = document.querySelector("#pesan-kosong");
const form = document.querySelector("form"); // ganti dengan id form Anda

console.log(daftar, filter, pesanKosong, form);
console.log(document.querySelectorAll("#filter button"));
console.log(Array.from(document.querySelectorAll("#filter button")).map((t) => t.textContent));