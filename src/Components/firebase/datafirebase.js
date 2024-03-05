// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB89K5aApRS60RtG_L5xSXgomB_26Rc7yk",
  authDomain: "automotive-js.firebaseapp.com",
  projectId: "automotive-js",
  storageBucket: "automotive-js.appspot.com",
  messagingSenderId: "419003334832",
  appId: "1:419003334832:web:a3c422804f9f21a10cbb75",
  measurementId: "G-RGJ6L35H3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
