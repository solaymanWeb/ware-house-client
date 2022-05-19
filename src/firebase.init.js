// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA5cy0ZGm1bvmffGNB8PcrQMXcmlMn_2I",
  authDomain: "fridge-store-house.firebaseapp.com",
  projectId: "fridge-store-house",
  storageBucket: "fridge-store-house.appspot.com",
  messagingSenderId: "207488755588",
  appId: "1:207488755588:web:3eac0aae17b18a5cc79fd1",
  measurementId: "G-PZ88PNTW1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;