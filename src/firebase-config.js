import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzqklgZ3eaW2Ssx91VomeHGKSaTN91G4I",
  authDomain: "sal-mdjareb.firebaseapp.com",
  projectId: "sal-mdjareb",
  storageBucket: "sal-mdjareb.appspot.com",
  messagingSenderId: "817409572786",
  appId: "1:817409572786:web:31984f547bf5672e272eab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);

