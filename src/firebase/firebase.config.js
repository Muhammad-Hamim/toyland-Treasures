// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsYiqpMUw7_a5VKW-SZpmVG46mi1fFcmM",
  authDomain: "toyland-treasures.firebaseapp.com",
  projectId: "toyland-treasures",
  storageBucket: "toyland-treasures.appspot.com",
  messagingSenderId: "244642491164",
  appId: "1:244642491164:web:c9fbd1b6ed6e5b40b328d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;