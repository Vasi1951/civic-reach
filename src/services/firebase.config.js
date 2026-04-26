import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Use Vite environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "HACKATHON_MOCK_API_KEY_PLACEHOLDER",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "civic-reach.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "civic-reach",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "civic-reach.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789012",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:123456789012:web:abc123def456ghi789",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-MOCKMETRICS"
};

// Initialize Firebase securely
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Analytics is only supported in browser environments
export let analytics = null;
isSupported().then(yes => yes ? analytics = getAnalytics(app) : null);
