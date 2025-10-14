// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdflPcTXkys-bN9pOhuR0ZkdxoPFOeFro",
  authDomain: "your-pharmacy-838a9.firebaseapp.com",
  projectId: "your-pharmacy-838a9",
  storageBucket: "your-pharmacy-838a9.firebasestorage.app",
  messagingSenderId: "406344243207",
  appId: "1:406344243207:web:e27a6ddd657a11b0f172a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);