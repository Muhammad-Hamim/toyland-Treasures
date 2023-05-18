// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.ToyTreasures.ToyTreasures_apiKey,
  authDomain: process.env.ToyTreasures.ToyTreasures_authDomain,
  projectId: process.env.ToyTreasures.ToyTreasures_projectId,
  storageBucket: process.env.ToyTreasures.ToyTreasures_storageBucket,
  messagingSenderId: process.env.ToyTreasures.ToyTreasures_messagingSenderId,
  appId: process.env.ToyTreasures.ToyTreasures_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
