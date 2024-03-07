// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0btYodiAfWQVvzwBfTpixJVFpFliMOmY",
    authDomain: "connect-with-connect.firebaseapp.com",
    projectId: "connect-with-connect",
    storageBucket: "connect-with-connect.appspot.com",
    messagingSenderId: "321058296861",
    appId: "1:321058296861:web:7542060b5907474d34a2f4",
    measurementId: "G-227ZN0J14N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;