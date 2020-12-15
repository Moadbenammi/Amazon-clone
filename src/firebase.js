import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBZ6A6kpLCSWY4T6tCxalffnuvLpJZ91h0",
  authDomain: "clone-67e31.firebaseapp.com",
  databaseURL: "https://clone-67e31.firebaseio.com",
  projectId: "clone-67e31",
  storageBucket: "clone-67e31.appspot.com",
  messagingSenderId: "822716568701",
  appId: "1:822716568701:web:08b41723b14e2fce9a8d14",
  measurementId: "G-B1NRTSTH0H",
});


const auth = firebase.auth();

export { auth };
