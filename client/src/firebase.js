// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7897c.firebaseapp.com",
  projectId: "mern-estate-7897c",
  storageBucket: "mern-estate-7897c.appspot.com",
  messagingSenderId: "479495293648",
  appId: "1:479495293648:web:d626d46bf7350835e6acd5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);