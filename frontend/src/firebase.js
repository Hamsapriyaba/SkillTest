import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { getStorage } from "firebase/storage";  // ✅ Import Firebase Storage

// Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDoDu839M5LNah4Q0D_kuyrO8wUH-WESzA",
    authDomain: "skilltest-11d1f.firebaseapp.com",
    projectId: "skilltest-11d1f",
    storageBucket: "skilltest-11d1f.appspot.com", // ❌ Your storageBucket was incorrect
    messagingSenderId: "861523375300",
    appId: "1:861523375300:web:30bd87ac32b1424a348591"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);  // ✅ Initialize Storage

export { auth, db, storage, createUserWithEmailAndPassword, setDoc, doc };
