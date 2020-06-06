import { initializeApp } from 'firebase'
const app = initializeApp({
    apiKey: "AIzaSyCDvWeVauRsO3IEBRYX7Ha6BVCxzzJ4Akc",
    authDomain: "vuefb-todo.firebaseapp.com",
    databaseURL: "https://vuefb-todo.firebaseio.com",
    projectId: "vuefb-todo",
    storageBucket: "vuefb-todo.appspot.com",
    messagingSenderId: "1041386275963",
    appId: "1:1041386275963:web:8fc462784bff7fa5a88ede",
    measurementId: "G-9JKDYSC520"
})

export const db = app.database()
export const todosRef = db.ref('todos')