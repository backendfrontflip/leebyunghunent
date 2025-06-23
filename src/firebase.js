import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDiV39dEKA_4TMzjwWDfC8V-Dge5eFyUw",
  authDomain: "signup-4cc74.firebaseapp.com",
  projectId: "signup-4cc74",
  storageBucket: "signup-4cc74.firebasestorage.app",
  messagingSenderId: "559516849436",
  appId: "1:559516849436:web:8817852abfc3910d2756d9",
  measurementId: "G-MCV6Y3XRGV"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth }; 
