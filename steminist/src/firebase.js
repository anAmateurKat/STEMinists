import firebase from "firebase";
import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyA4BcgUml_wM53n0wXisu7BecP5BMkOBZM",
  authDomain: "steminist-c4d62.firebaseapp.com",
  projectId: "steminist-c4d62",
  storageBucket: "steminist-c4d62.appspot.com",
  messagingSenderId: "137776138570",
  appId: "1:137776138570:web:1c3f7dd63273f556ee99b3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const storage = firebase.storage()
const db = firebaseApp.firestore();
export { auth , storage , db};
