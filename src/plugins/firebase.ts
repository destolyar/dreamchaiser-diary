import { createApp } from 'vue'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAJCZnLQixhYykGIf5IoiK9g5iqzXaHjo0",
  authDomain: "goals-blog.firebaseapp.com",
  projectId: "goals-blog",
  storageBucket: "goals-blog.appspot.com",
  messagingSenderId: "250030626410",
  appId: "1:250030626410:web:dfc1b3f3861fae3cfe5c13",
  measurementId: "G-ZBL5479MDV"
}

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const firestore = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

export default firebaseApp