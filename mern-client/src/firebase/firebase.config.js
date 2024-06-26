// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import env from "react-dotenv";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "bookbyte-f2a14.firebaseapp.com",
  projectId: "bookbyte-f2a14",
  storageBucket: "bookbyte-f2a14.appspot.com",
  messagingSenderId: "629720041419",
  appId: "1:629720041419:web:796ec898d4a22b64e3584e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
