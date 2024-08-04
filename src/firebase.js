// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";//yo chai google authentication ko laagi
// import { getFirestore } from "firebase/firestore"; yo datastore ko lagi
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-mW1_mHT81K2WE516EoqtCGDUKgkJjiM",
  authDomain: "ping-83bd0.firebaseapp.com",
  projectId: "ping-83bd0",
  storageBucket: "ping-83bd0.appspot.com",
  messagingSenderId: "296298452593",
  appId: "1:296298452593:web:0cd78e5c6bd0a5fe83edd0",
  measurementId: "G-15FXTHF450"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = getFirestore(app);
export default app;
