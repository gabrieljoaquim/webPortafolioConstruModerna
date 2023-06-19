import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { db } from '@/conecciones/firebaseConfig'

// import 'firebase/firestore'

createApp(App).use(store).use(router).mount('#app')

// db.settings({ timestampsInSnapshots: true })