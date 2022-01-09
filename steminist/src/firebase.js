// import {firebase} from "firebase";
//import storage from 'firebase/storage'

// const firebaseConfig = {
//   apiKey: "AIzaSyA4BcgUml_wM53n0wXisu7BecP5BMkOBZM",
//   authDomain: "steminist-c4d62.firebaseapp.com",
//   projectId: "steminist-c4d62",
//   storageBucket: "steminist-c4d62.appspot.com",
//   messagingSenderId: "137776138570",
//   appId: "1:137776138570:web:1c3f7dd63273f556ee99b3",
// };

// const firebase = require("./firebase");

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// const storage = firebase.storage()
// const db = firebaseApp.firestore();
// export { auth , storage , db};


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyA4BcgUml_wM53n0wXisu7BecP5BMkOBZM",
  authDomain: "steminist-c4d62.firebaseapp.com",
  databaseURL: "https://steminist-c4d62-default-rtdb.firebaseio.com",
  projectId: "steminist-c4d62",
  storageBucket: "steminist-c4d62.appspot.com",
  messagingSenderId: "137776138570",
  appId: "1:137776138570:web:1c3f7dd63273f556ee99b3",
  measurementId: "G-CZ5PEZQ09C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {auth, storage, db};
