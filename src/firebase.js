// src/firebase.js
import { initializeApp } from "firebase/app"; 
import { 
  GoogleAuthProvider, 
  getAuth, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  sendPasswordResetEmail, 
  signOut 
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2qBWNutN6WBN2WRYGwi5DqIM8Gk5oLxU",
  authDomain: "fir-server-routes-c5a79.firebaseapp.com",
  projectId: "fir-server-routes-c5a79",
  storageBucket: "fir-server-routes-c5a79.firebasestorage.app",
  messagingSenderId: "89237371205",
  appId: "1:89237371205:web:7d0b6b708c23d39143662c"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export {
  auth,
  provider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
};