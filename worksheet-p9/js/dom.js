import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

function render(daftar) {
  // Baris WAJIB: Kosongkan dulu isi wadah sebelum diisi data baru
  wadah.textContent = ""; 
function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;   // teks, bukan HTML
  return li;
}

daftarProyek.forEach((proyek) => wadah.append(buatKartu(proyek)));
}

render(daftarProyek);