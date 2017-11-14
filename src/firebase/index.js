import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: 'AIzaSyAU7YoiOl0mA0uuMUB1CEvJLOuUP5ZlN6A',
  authDomain: 'meuadministrador.firebaseapp.com',
  databaseURL: 'https://meuadministrador.firebaseio.com',
  projectId: 'meuadministrador',
  storageBucket: 'meuadministrador.appspot.com',
  messagingSenderId: '166918787746'
})

export const appStorage = app.storage()
export const db = app.database()
export const postsRef = db.ref('Posts/')
export const contadoRef = db.ref('contados/')
