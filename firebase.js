// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDINFoc_IafdNlQJ9v3Woh-b8PKfKolQGA",
  authDomain: "fooddas-f0ab2.firebaseapp.com",
  projectId: "fooddas-f0ab2",
  storageBucket: "fooddas-f0ab2.appspot.com",
  messagingSenderId: "470717880101",
  appId: "1:470717880101:web:d36473d729b977bc072ccc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)