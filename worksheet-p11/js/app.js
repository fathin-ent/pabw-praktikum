// app.js — perakit: mengimpor semuanya dan menjalankan aplikasi.
import { state, isiNotisia, catatGalat } from "./state.js";
import { render } from "./dom.js";
import { pasangPendengar } from "./events.js";
import { ambilNotisia } from "./api.js";

pasangPendengar();
render(state);

try {
  isiNotisia(await ambilNotisia());
} catch (galat) {
  catatGalat(galat.message);
}
render(state);