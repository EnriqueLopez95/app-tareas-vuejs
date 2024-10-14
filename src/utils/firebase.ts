// src/firebase.ts
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCX7qOGRgsWHMGktmsIk4DV7AVXVDaWgkU',
  authDomain: 'vue-firebases-tasks.firebaseapp.com',
  projectId: 'vue-firebases-tasks',
  storageBucket: 'vue-firebases-tasks.appspot.com',
  messagingSenderId: '554896622578',
  appId: '1:554896622578:web:b4eb481318f40c8bea216b',
}

// Inicializa la aplicación de Firebase
const app = initializeApp(firebaseConfig)

// Inicializa Firestore
const db = getFirestore(app)

export { db }
