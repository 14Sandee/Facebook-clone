import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB5-t_a_cMVC7h5V409jRC0yFokbrGoZXI",
    authDomain: "facebook-clone-73aa6.firebaseapp.com",
    projectId: "facebook-clone-73aa6",
    storageBucket: "facebook-clone-73aa6.appspot.com",
    messagingSenderId: "883897477380",
    appId: "1:883897477380:web:6343b855e05794a7804851"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();
const storage = firebase.storage();

export { db, storage };