// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAPUOOh-jMf7L189SsUj3sajYP2VCDinkc',
    authDomain: 'stellar-fusion-191e9.firebaseapp.com',
    projectId: 'stellar-fusion-191e9',
    storageBucket: 'stellar-fusion-191e9.appspot.com',
    messagingSenderId: '503074817201',
    appId: '1:503074817201:web:17d45b83f3aad72a64ce90',
    measurementId: 'G-4P6RV8BY1B',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
auth.useDeviceLanguage()
// const analytics = getAnalytics(app)
