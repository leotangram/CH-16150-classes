import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBZ4SIZuB0_PVF8UDaPtOZNQ2NrU4F9M5k",
  authDomain: "coderhouse-class16150.firebaseapp.com",
  projectId: "coderhouse-class16150",
  storageBucket: "coderhouse-class16150.appspot.com",
  messagingSenderId: "369488125924",
  appId: "1:369488125924:web:09860a194341128cc231f1",
});

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);
