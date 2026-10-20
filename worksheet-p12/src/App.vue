<script setup>
import { profil as identitas } from './data.js'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'
</script>
<template>
  <KepalaProfil :profil="identitas" />
  <TombolFilter />
  <DaftarProyek />
  <FormKontak />
</template>