import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBwOdKVOMrYO0jWEQM6e7SQvm2Pnr-t9k",
  authDomain: "coin-b6d8b.firebaseapp.com",
  projectId: "coin-b6d8b",
  storageBucket: "coin-b6d8b.appspot.com",
  messagingSenderId: "491019852038",
  appId: "1:491019852038:web:9c2ac608ce9514be97a687",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
