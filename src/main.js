import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/bootstrap.min.css'
import '@/assets/js/bootstrap.bundle.min.js'
import VueScrollama from 'vue-scrollama';


// import { db } from '@/conecciones/firebaseConfig'

// import 'firebase/firestore'

createApp(App).use(store).use(router).use(VueScrollama).mount('#app')

// db.settings({ timestampsInSnapshots: true })