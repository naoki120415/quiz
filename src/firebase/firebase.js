// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKwQ5_qessPXOgeFvZXdrbfk43HhyojEw",
  authDomain: "ai-illustration-quiz-9edee.firebaseapp.com",
  projectId: "ai-illustration-quiz-9edee",
  storageBucket: "ai-illustration-quiz-9edee.appspot.com",
  messagingSenderId: "839691351701",
  appId: "1:839691351701:web:6359e8408fce7315eb4d9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;