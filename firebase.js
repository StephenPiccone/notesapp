import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyASxPwAUwqlGtL9TSJN_qAwhio0efmZZu0",
  authDomain: "react-notes-66fc6.firebaseapp.com",
  projectId: "react-notes-66fc6",
  storageBucket: "react-notes-66fc6.appspot.com",
  messagingSenderId: "678938764197",
  appId: "1:678938764197:web:80f0989e9d401abed77e4c"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const nostesCollection = collection(db, "notes")