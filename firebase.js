import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
 
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCj47NQqNYG6go6E-H_mx2RdqcHiW7KRrw",
    authDomain: "reactnotesapp-12b94.firebaseapp.com",
    projectId: "reactnotesapp-12b94",
    storageBucket: "reactnotesapp-12b94.appspot.com",
    messagingSenderId: "329306661267",
    appId: "1:329306661267:web:8d5974c139874c71320866"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")