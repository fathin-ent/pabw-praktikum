<script setup>
import { state, pilihKategori } from '../state.js'
const kategori = ['semua', 'web', 'data']
</script>
<template>
  <div>
    <button v-for="k in kategori" :key="k"
            :class="{ aktif: state.kategoriAktif === k }"
            @click="pilihKategori(k)">
      {{ k }}
    </button>
  </div>
</template>