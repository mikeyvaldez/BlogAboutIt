// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogaboutit-28d7e.firebaseapp.com",
  projectId: "blogaboutit-28d7e",
  storageBucket: "blogaboutit-28d7e.firebasestorage.app",
  messagingSenderId: "877638848474",
  appId: "1:877638848474:web:1d5346cb8d0349cfd23ae3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);