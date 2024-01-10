import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDPJrTzDYd5nPn2XmPuKIJ8zFtRUj1UKWI",
  authDomain: "ecommerce-49930.firebaseapp.com",
  projectId: "ecommerce-49930",
  storageBucket: "ecommerce-49930.appspot.com",
  messagingSenderId: "499299389675",
  appId: "1:499299389675:web:a9e2b05e0e3d8ea8d26eae"
};

// Initialize Firebase
initializeApp(firebaseConfig)

const db = getFirestore()

export default db