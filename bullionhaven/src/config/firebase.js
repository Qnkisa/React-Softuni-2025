import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCiv58hCV37K-ncWQv5oPvxDe_P0KzPhzA",
  authDomain: "bullion-haven-5726c.firebaseapp.com",
  projectId: "bullion-haven-5726c",
  storageBucket: "bullion-haven-5726c.firebasestorage.app",
  messagingSenderId: "476455709849",
  appId: "1:476455709849:web:858c8921544439a47edc08",
  measurementId: "G-LNFQTEEYBK"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);