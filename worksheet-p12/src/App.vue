<script setup>
import { onMounted, watch } from 'vue'
import { profil as identitas } from './data.js'
import { state, BAWAAN, KATEGORI_SAH, URUTAN_SAH } from './state.js'
import { muat, simpan, aturUlang } from './simpanan.js'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

onMounted(() => {
  const isi = muat()   // VERSI diperiksa di dalam muat()
  if (!isi) return
  if (KATEGORI_SAH.includes(isi.kategoriAktif)) state.kategoriAktif = isi.kategoriAktif
  if (URUTAN_SAH.includes(isi.urutan)) state.urutan = isi.urutan
})

watch(state, (nilai) => simpan(nilai), { deep: true })

function aturUlangPilihan() {
  aturUlang()
  state.kategoriAktif = BAWAAN.kategoriAktif
  state.urutan = BAWAAN.urutan
  simpan(state)
}
</script>

<template>
  <KepalaProfil :profil="identitas" />
  <TombolFilter />
  <button type="button" @click="aturUlangPilihan">Atur ulang</button>
  <DaftarProyek />
  <FormKontak />
</template>