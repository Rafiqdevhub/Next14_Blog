// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "next-blog-421014.firebaseapp.com",
  projectId: "next-blog-421014",
  storageBucket: "next-blog-421014.appspot.com",
  messagingSenderId: "440071789019",
  appId: "1:440071789019:web:79465807592757206b6ffe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);