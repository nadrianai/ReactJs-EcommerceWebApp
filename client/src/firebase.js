// import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
 
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1Vb38sBkYYB3VmoKKA95_d_bHT4T_tDc",
    authDomain: "ecommerce-24392.firebaseapp.com",
    projectId: "ecommerce-24392",
    storageBucket: "ecommerce-24392.appspot.com",
    messagingSenderId: "21483152500",
    appId: "1:21483152500:web:98ddba363c48735bbd1d21"
//   databaseURL: "https://xxxxxxxxxxx.firebaseio.com",

};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
 
// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();