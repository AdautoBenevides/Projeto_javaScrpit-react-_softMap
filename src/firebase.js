// import { firebase } from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/storage";
import "firebase/compat/functions";
import "firebase/compat/firestore";



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnMRQBZUTlQ7TRk8JPw7w_EomDdYQ_6hU",
    authDomain: "instagram-clone-c97cf.firebaseapp.com",
    projectId: "instagram-clone-c97cf",
    storageBucket: "instagram-clone-c97cf.appspot.com",
    messagingSenderId: "280888448986",
    appId: "1:280888448986:web:43dc5565f014d8fef592e3",
    measurementId: "G-471FR97XYK"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export { db, auth, storage, functions }