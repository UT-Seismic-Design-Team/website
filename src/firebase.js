import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAETOPFBF-82IrnNVZ1V8_HMNDmHQ2OCTA",
  authDomain: "seismic-website-c0e9b.firebaseapp.com",
  projectId: "seismic-website-c0e9b",
  storageBucket: "seismic-website-c0e9b.appspot.com",
  messagingSenderId: "739854171607",
  appId: "1:739854171607:web:873a73727204d55b5c9f92",
  measurementId: "G-0YDFCQMJGF",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
