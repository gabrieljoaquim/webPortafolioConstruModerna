import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  // Configuración de Firebase
  apiKey: 'AIzaSyA2yC08nmz8kg5sSHqJNbcP5Og3F_YbclI',
  authDomain: 'registro-de-usuarios-motos.firebaseapp.com',
  projectId: 'registro-de-usuarios-motos',
  storageBucket: 'registro-de-usuarios-motos.appspot.com',
  messagingSenderId: '78399619246',
  appId: '1:78399619246:web:f2e8c0d8f8ebe060b4a7a3'
}

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export { db }


