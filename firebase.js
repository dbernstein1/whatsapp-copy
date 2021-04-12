import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrmQzA7t0jgqS26T4yUb6T9a79jy0JPdY",
  authDomain: "whatsapp-a5a1d.firebaseapp.com",
  projectId: "whatsapp-a5a1d",
  storageBucket: "whatsapp-a5a1d.appspot.com",
  messagingSenderId: "555754665449",
  appId: "1:555754665449:web:bbf62c88a9da163f250778",
  measurementId: "G-EKFTDXD2BV",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
