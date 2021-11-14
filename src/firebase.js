// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8NMu2oIc7X5ZKH2AyeKU9nMP38FeNsAM",
  authDomain: "mi-portafolio-ff86b.firebaseapp.com",
  projectId: "mi-portafolio-ff86b",
  storageBucket: "mi-portafolio-ff86b.appspot.com",
  messagingSenderId: "463839713264",
  appId: "1:463839713264:web:c237343ae18291a04a2f35",
  measurementId: "G-CSYPJK8NT7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
