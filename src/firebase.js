// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaV2CEtHDCH1uZZvRpiNysEgTyYWw1Enw",
  authDomain: "my-app-4b176.firebaseapp.com",
  projectId: "my-app-4b176",
  storageBucket: "my-app-4b176.appspot.com",
  messagingSenderId: "146968924952",
  appId: "1:146968924952:web:eba79cfc21490db2cb446d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app