import { initializeApp } from "firebase/app";
import { applyActionCode, getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBMD9mZ70E4lAJMR4ZdCwcO0aTqefE6snM",
  authDomain: "carrot-market-c3f88.firebaseapp.com",
  databaseURL:
    "https://carrot-market-c3f88-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "carrot-market-c3f88",
  storageBucket: "carrot-market-c3f88.appspot.com",
  messagingSenderId: "783971831667",
  appId: "1:783971831667:web:305bc9f8f7006c1c153f06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);
