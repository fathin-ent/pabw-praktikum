// events.js — pemasangan seluruh pendengar peristiwa.
import { state, ubahKategori } from "./state.js";
import { barisFilter, render } from "./dom.js";

export function pasangPendengar() {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    ubahKategori(tombol.dataset.kategori);
    render(state);
  });
}