// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-ffy6IvmrN07SEt_xU3p33BQtSGrDBWY",
  authDomain: "minihackthon-a6f43.firebaseapp.com",
  projectId: "minihackthon-a6f43",
  storageBucket: "minihackthon-a6f43.firebasestorage.app",
  messagingSenderId: "510086064533",
  appId: "1:510086064533:web:f3cf62034d132688466e9c",
  measurementId: "G-V9LBT46EJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);