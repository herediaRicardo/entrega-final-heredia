// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa4KSXM4eUg3vInnNswz4beY-48_Alghk",
  authDomain: "e-commerce-heredia.firebaseapp.com",
  projectId: "e-commerce-heredia",
  storageBucket: "e-commerce-heredia.firebasestorage.app",
  messagingSenderId: "854462727973",
  appId: "1:854462727973:web:46feb391c6005be02cbccc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)