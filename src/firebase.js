//import * as firebase from "firebase/app";
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh2JpcH9FfRd5-0r6TJsnwssikZ6GyfTs",
  authDomain: "kriliya-ff59b.firebaseapp.com",
  projectId: "kriliya-ff59b",
  storageBucket: "kriliya-ff59b.appspot.com",
  messagingSenderId: "365626291594",
  appId: "1:365626291594:web:d70de9f8a49a80c296c473",
  measurementId: "G-JTTHXP2K5X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 

