import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import dotenv from 'dotenv';

dotenv.config();

console.log("API Key:", process.env.NEXT_PUBLIC_FIREBASE_API_KEY);

const firebaseConfig = {
  apiKey: "AIzaSyAoKnJiBCslWBA_8aPfhsV_L-Bi24pdVPI",
  authDomain: "buenplan-b4be7.firebaseapp.com",
  projectId: "buenplan-b4be7",
  storageBucket: "buenplan-b4be7.appspot.com",
  messagingSenderId: "956600573245",
  appId: "1:956600573245:web:037da8fda32090687df954",
  measurementId: "G-F16Z9P38D7"
};

const app = firebase.initializeApp(firebaseConfig);

export const firestoreDB = app.firestore();
export const auth = app.auth();