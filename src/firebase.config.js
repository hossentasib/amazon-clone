import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCW4uQIzm8p5yeH9XJ6pIHphihdkuatgjA",
  authDomain: "clone-hossen.firebaseapp.com",
  databaseURL: "https://clone-hossen.firebaseio.com",
  projectId: "clone-hossen",
  storageBucket: "clone-hossen.appspot.com",
  messagingSenderId: "604848318556",
  appId: "1:604848318556:web:59e845414510be6f8bde99"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};