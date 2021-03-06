import { initializeApp } from "firebase/app" 
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

// Initialize Firebase and Firestore 
const app = initializeApp(firebaseConfig) 
const db = getFirestore(app)
export {db}
