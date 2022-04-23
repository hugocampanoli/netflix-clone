// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDzaYVc9FsqC-g9zAlt7M-9EZcNQlW2MGo',
  authDomain: 'netflix-clone-34079.firebaseapp.com',
  projectId: 'netflix-clone-34079',
  storageBucket: 'netflix-clone-34079.appspot.com',
  messagingSenderId: '132637481589',
  appId: '1:132637481589:web:d6d2831fb2d0420410363c',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
