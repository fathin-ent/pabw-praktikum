// app.js — perakit: mengimpor semuanya dan menjalankan aplikasi.
import { state, isiNotisia, catatGalat } from "./state.js";
import { render } from "./dom.js";
import { pasangPendengar } from "./events.js";
import { ambilNotisia } from "./api.js";

window.state = state; // agar console.log(state) bisa dipanggil dari Console

pasangPendengar();
render(state);

try {
  isiNotisia(await ambilNotisia());
} catch (galat) {
  catatGalat(galat.message);
}