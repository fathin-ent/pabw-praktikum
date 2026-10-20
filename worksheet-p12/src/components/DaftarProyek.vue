<script setup>
import { computed } from 'vue'
import { state } from '../state.js'

const tampil = computed(() => {
  const saring = state.kategoriAktif === 'semua'
    ? state.daftarProyek
    : state.daftarProyek.filter(p => p.kategori === state.kategoriAktif)
  return state.urutan === 'terbalik' ? [...saring].reverse() : saring
})
</script>
<template>
  <div>
    <article v-for="proyek in tampil" :key="proyek.id">
      <h3>{{ proyek.judul }}</h3>
      <p>{{ proyek.tahun }} · {{ proyek.selesai ? 'Selesai' : 'Dalam pengerjaan' }}</p>
    </article>
    <p v-if="tampil.length === 0">Belum ada proyek di kategori ini.</p>
  </div>
</template>