import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Ta configuration Firebase officielle
const firebaseConfig = {
  apiKey: "AIzaSyBWphVG14hRggPsLXml7V_HoZcJ7R-1Q3A",
  authDomain: "zuabillet-app-web.firebaseapp.com",
  projectId: "zuabillet-app-web",
  storageBucket: "zuabillet-app-web.firebasestorage.app",
  messagingSenderId: "142159382300",
  appId: "1:142159382300:web:4f0a523b1acecc980b5cd9"
};

// Initialisation
const app = initializeApp(firebaseConfig);
// Export de la base de données pour que l'App puisse l'utiliser
export const db = getFirestore(app);
