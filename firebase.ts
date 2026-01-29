import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWphVG14hRggPsLXml7V_HoZcJ7R-1Q3A",
  authDomain: "zuabillet-app-web.firebaseapp.com",
  projectId: "zuabillet-app-web",
  storageBucket: "zuabillet-app-web.firebasestorage.app",
  messagingSenderId: "142159382300",
  appId: "1:142159382300:web:4f0a523b1acecc980b5cd9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
