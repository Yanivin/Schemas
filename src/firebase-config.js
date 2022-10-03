import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPfuAC5hyVhFArdh4hvoXSz8IfG3BVETQ",
  authDomain: "learnwithpi.firebaseapp.com",
  projectId: "learnwithpi",
  storageBucket: "learnwithpi.appspot.com",
  messagingSenderId: "1044299535535",
  appId: "1:1044299535535:web:5e9e32ebdba6a1c48c705a",
  measurementId: "G-0BNEW9KCV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);