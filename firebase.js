import * as firebase from 'firebase'

import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAeysFiWxhgw0scpjugU8L6ULdcsz2N7AY",
    authDomain: "expensetracker-app-512e1.firebaseapp.com",
    projectId: "expensetracker-app-512e1",
    storageBucket: "expensetracker-app-512e1.appspot.com",
    messagingSenderId: "709173461192",
    appId: "1:709173461192:web:7a8f4b63d05a0b1fa4a5fd",
    measurementId: "G-3R4LKJ9CG6"
  
}

let app
if ((firebase.apps.length === 0)) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const db = app.firestore()

export {auth, db}
