import 'bootstrap/dist/css/bootstrap.min.css';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsgfWk5IXCHByZt5kSYs2ZKQKpvVUZgf8",
  authDomain: "kukiapp-ec7e3.firebaseapp.com",
  projectId: "kukiapp-ec7e3",
  storageBucket: "kukiapp-ec7e3.appspot.com",
  messagingSenderId: "188071983839",
  appId: "1:188071983839:web:2bb9be8b27c0964234876a"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);