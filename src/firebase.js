// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlteDht5EjKUx6ZfzNGY5bxtq1MM9xqpM",
  authDomain: "e-com-af655.firebaseapp.com",
  projectId: "e-com-af655",
  storageBucket: "e-com-af655.appspot.com",
  messagingSenderId: "1025340861125",
  appId: "1:1025340861125:web:dea67a140492d32faf9eac",
  measurementId: "G-B07LFGNZWZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
