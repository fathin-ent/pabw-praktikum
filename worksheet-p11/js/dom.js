// dom.js — seluruh sentuhan ke halaman: pemilih, render, perubahan kelas.
// Berkas ini hanya MEMBACA state; tidak pernah mengubahnya.

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");
export const barisFilter = document.querySelector("#filter");
const wadahNotisia = document.querySelector("#daftar-notisia");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;
  return li;
}

// Dulu menyaring di dalam pendengar klik P9; kini kategorinya dari state.
function saring(state) {
  return state.daftarProyek.filter(
    (proyek) =>
      state.kategoriAktif === "semua" || proyek.kategori === state.kategoriAktif
  );
}

function tandaiTombolAktif(state) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol.dataset.kategori === state.kategoriAktif);
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
  wadah.textContent = "";                    // 1. kosongkan

  const tampil = saring(state);              // dari state, bukan argumen
  if (tampil.length === 0) {                 // 2. keadaan kosong
    kosong.hidden = false;
  } else {
    kosong.hidden = true;
    tampil.forEach((item) => wadah.append(buatKartu(item))); // 3. isi ulang
  }

  tandaiTombolAktif(state);
  gambarNotisia(state);
}