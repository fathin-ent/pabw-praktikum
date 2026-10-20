<script setup>
import { ref } from 'vue'

const nama = ref('')
const pesan = ref('')
const status = ref('')

function kirim() {
  status.value = 'Pesan dari ' + nama.value + ' sudah dicatat.'
}
</script>

<template>
  <form @submit.prevent="kirim">
    <label for="nama">Nama</label>
    <input id="nama" v-model="nama" type="text" />

    <label for="pesan">Pesan</label>
    <textarea id="pesan" v-model="pesan"></textarea>

    <button type="submit">Kirim</button>
    <p v-if="status">{{ status }}</p>
  </form>
</template>