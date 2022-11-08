import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBe626Ey8sn8zEZwa8juT7vCHb1TOA60KQ",
  authDomain: "blogdata-9b74d.firebaseapp.com",
  projectId: "blogdata-9b74d",
  storageBucket: "blogdata-9b74d.appspot.com",
  messagingSenderId: "558355587053",
  appId: "1:558355587053:web:26437f7e3e560588f851e4",
  measurementId: "G-ZRD179ZSYB",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
