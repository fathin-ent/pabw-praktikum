// events.js — pemasangan seluruh pendengar peristiwa.
// Tidak mengubah state langsung; hanya memanggil fungsi pengubah di state.js.
import { pilihKategori } from "./state.js";
import { barisFilter } from "./dom.js";

export function pasangPendengar() {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    pilihKategori(tombol.dataset.kategori);
  });
}