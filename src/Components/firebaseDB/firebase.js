// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVl1MixCVu4F5PYHJ_HNSBBBVMozdVGUA",
  authDomain: "baby-code-2b3e6.firebaseapp.com",
  projectId: "baby-code-2b3e6",
  storageBucket: "baby-code-2b3e6.firebasestorage.app",
  messagingSenderId: "601402972547",
  appId: "1:601402972547:web:8309006d3e14b53a717eb6",
  measurementId: "G-FSBYV0XXPV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export const db = getFirestore(app);
export {auth, app};

// firebase deploy