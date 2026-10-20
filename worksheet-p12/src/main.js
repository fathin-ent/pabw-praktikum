import { createApp } from 'vue'
import App from './App.vue'
import { pulihkan } from './state.js'

import './tokens.css'
import './base.css'
import './layout.css'
import './komponen.css'
import './tema.css'
import './responsif.css'

pulihkan() // ambil pilihan pengguna dari localStorage (D.2)
createApp(App).mount('#app')