// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


import{getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBr1VHFLrwDzHr34bJ4d83Ayx252NmkKJc",
  authDomain: "ecomm-app-2ffb9.firebaseapp.com",
  projectId: "ecomm-app-2ffb9",
  storageBucket: "ecomm-app-2ffb9.appspot.com",
  messagingSenderId: "190199562106",
  appId: "1:190199562106:web:2f0b349f3b7e1776a0e0c3",
  measurementId: "G-FGGEWG8MSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);

export { app };
