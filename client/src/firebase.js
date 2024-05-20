// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-app-01.firebaseapp.com",
  projectId: "mern-blog-app-01",
  storageBucket: "mern-blog-app-01.appspot.com",
  messagingSenderId: "1065674419451",
  appId: "1:1065674419451:web:7a5b2916cf6227291ad45e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
