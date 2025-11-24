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
  apiKey: "AIzaSyCxmWFl-Malu9iOPu6g0YUtyTbUUNkJCc8",
  authDomain: "fir-auth-react-app-14411.firebaseapp.com",
  projectId: "fir-auth-react-app-14411",
  storageBucket: "fir-auth-react-app-14411.firebasestorage.app",
  messagingSenderId: "795514596116",
  appId: "1:795514596116:web:a9246d15782229a487b001"
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