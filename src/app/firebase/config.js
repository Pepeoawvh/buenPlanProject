require("dotenv").config();
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "buenplan-b4be7.firebaseapp.com",
  projectId: "buenplan-b4be7",
  storageBucket: "buenplan-b4be7.appspot.com",
  messagingSenderId: "956600573245",
  appId: "1:956600573245:web:037da8fda32090687df954",
  measurementId: "G-F16Z9P38D7"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firestore
export const firestoreDB = app.firestore();
 
