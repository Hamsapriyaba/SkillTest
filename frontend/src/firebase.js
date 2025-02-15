import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { getStorage } from "firebase/storage";  // ✅ Import Firebase Storage

// Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDsIrIHboOyhMMaGzOxTNmn-vpObdkM034",
  authDomain: "skilltest-216f5.firebaseapp.com",
  projectId: "skilltest-216f5",
  storageBucket: "skilltest-216f5.firebasestorage.app",
  messagingSenderId: "291902883662",
  appId: "1:291902883662:web:afb537b7634f5df729801f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);  // ✅ Initialize Storage

export { auth, db, storage, createUserWithEmailAndPassword, setDoc, doc };
