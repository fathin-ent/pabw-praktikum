// dom.js — seluruh sentuhan ke halaman: pemilih, render, perubahan kelas.
import { proyekTerpilih } from "./state.js";

const wadahProyek = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");
export const barisFilter = document.querySelector("#filter");
const wadahNotisia = document.querySelector("#daftar-notisia");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;
  return li;
}

function gambarProyek(daftar) {
  wadahProyek.textContent = "";

  if (daftar.length === 0) {
    pesanKosong.hidden = false;
    return;
  }

  pesanKosong.hidden = true;
  daftar.forEach((proyek) => wadahProyek.append(buatKartu(proyek)));
}

function tandaiTombolAktif(kategori) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol.dataset.kategori === kategori);
  });
}

function gambarNotisia(state) {
  wadahNotisia.textContent = "";

  if (state.statusNotisia === "memuat") {
    wadahNotisia.textContent = "Memuat...";
    return;
  }
  if (state.statusNotisia === "galat") {
    wadahNotisia.textContent = "Gagal memuat data: " + state.pesanGalat;
    return;
  }
  if (state.notisia.length === 0) {
    wadahNotisia.textContent = "Belum ada notisia";
    return;
  }

  state.notisia.slice(0, 5).forEach((n) => {
    const kartu = document.createElement("article");
    const judul = document.createElement("h3");
    judul.textContent = n.title;
    kartu.appendChild(judul);
    wadahNotisia.appendChild(kartu);
  });
}

export function render(state) {
  gambarProyek(proyekTerpilih(state));
  tandaiTombolAktif(state.kategori);
  gambarNotisia(state);
}