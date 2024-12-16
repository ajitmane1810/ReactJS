// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5EIb0xiazH6gAAifDN2M34KueWqPkSFQ",
  authDomain: "react-ecom-f059f.firebaseapp.com",
  projectId: "react-ecom-f059f",
  storageBucket: "react-ecom-f059f.appspot.com",
  messagingSenderId: "290951153994",
  appId: "1:290951153994:web:f61c547539e6a09b2059b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

// export for use in other files 
export {fireDB,auth};
