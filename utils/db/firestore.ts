import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC0hKnnLMvTtdyLqePGo71LFzxNItiyIkc",
    authDomain: "shopx-6969.firebaseapp.com",
    projectId: "shopx-6969",
    storageBucket: "shopx-6969.appspot.com",
    messagingSenderId: "172246328283",
    appId: "1:172246328283:web:7bf0150ff8f63ae85fbdfe"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const sdb = getStorage(app)

export {
    app,
    db,
    sdb
}