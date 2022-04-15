// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzTGnnJjEyclxCQQgBHVC11UjyV92Fg2c",
    authDomain: "ema-john-with-firebase-a-3ba90.firebaseapp.com",
    projectId: "ema-john-with-firebase-a-3ba90",
    storageBucket: "ema-john-with-firebase-a-3ba90.appspot.com",
    messagingSenderId: "350786065315",
    appId: "1:350786065315:web:fee0611f4aff3fd3744016"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

export default auth;