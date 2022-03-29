import { initializeApp } from "firebase/app";
import {getFirestore,collection} from "firebase/firestore";





const firebaseConfig = {
  apiKey: "AIzaSyDzqklgZ3eaW2Ssx91VomeHGKSaTN91G4I",
  authDomain: "sal-mdjareb.firebaseapp.com",
  projectId: "sal-mdjareb",
  storageBucket: "sal-mdjareb.appspot.com",
  messagingSenderId: "817409572786",
  appId: "1:817409572786:web:3a4efa53e1f66224272eab"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

const colRef=collection(db,"reviews");
 
export {db,colRef}