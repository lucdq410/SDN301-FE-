export const apiURL = "http://localhost:3000";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPKwDx4F9egVarQAn-oFIrzEzkMns4K5o",
  authDomain: "sdn301-movieboking.firebaseapp.com",
  projectId: "sdn301-movieboking",
  storageBucket: "sdn301-movieboking.appspot.com",
  messagingSenderId: "979902372247",
  appId: "1:979902372247:web:5e06bea25f0b179d620cd2",
  measurementId: "G-2Y4DJ9JHG8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
