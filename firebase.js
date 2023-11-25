import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAftHqQ8l6GahZB5DpTnRO_YmtaIsnh4Z4",
  authDomain: "notesapp-251123.firebaseapp.com",
  projectId: "notesapp-251123",
  storageBucket: "notesapp-251123.appspot.com",
  messagingSenderId: "66167782460",
  appId: "1:66167782460:web:0bf7aa181bf896087cd739"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const notesCollection = collection(db, "notes")