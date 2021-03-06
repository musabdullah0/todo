import firebase from 'firebase/app'
import 'firebase/firestore'
import dotenv from 'dotenv'

dotenv.config()
let config = {
    apiKey: process.env.API_KEY,
    authDomain: "vuefb-todo.firebaseapp.com",
    databaseURL: "https://vuefb-todo.firebaseio.com",
    projectId: "vuefb-todo",
    storageBucket: "vuefb-todo.appspot.com",
    messagingSenderId: "1041386275963",
    appId: "1:1041386275963:web:8fc462784bff7fa5a88ede",
    measurementId: "G-9JKDYSC520"
}

firebase.initializeApp(config)
const db = firebase.firestore()

export default db
