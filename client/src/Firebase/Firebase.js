// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH8Qu7bkAU0z9wIDlRDGF8C_Qh3lQ0mFE",
  authDomain: "ecom-app-df719.firebaseapp.com",
  projectId: "ecom-app-df719",
  storageBucket: "ecom-app-df719.appspot.com",
  messagingSenderId: "597578368006",
  appId: "1:597578368006:web:0b55987695ca7243386f87",
  measurementId: "G-PKS6M9CX6B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);    