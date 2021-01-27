import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCvdNuoefP19W82Jze3tLX_mkj9B7yI6s8",
  authDomain: "clone-76e09.firebaseapp.com",
  projectId: "clone-76e09",
  storageBucket: "clone-76e09.appspot.com",
  messagingSenderId: "992853085674",
  appId: "1:992853085674:web:cc33e781e87427cb41b693",
  measurementId: "G-G4D1JWM33D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
