// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAKsvfvwj1xqFlKKEhEX9HOigFARe32iKw",
    authDomain: "sirius-a-31cc8.firebaseapp.com",
    projectId: "sirius-a-31cc8",
    storageBucket: "sirius-a-31cc8.firebasestorage.app",
    messagingSenderId: "689671340844",
    appId: "1:689671340844:web:a8b47d28debc656121e289"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, addDoc, collection };