import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCDjL5JeVCzHf4UUOuW4cWZql2VOM7mN7Y",
    authDomain: "cssec-database.firebaseapp.com",
    projectId: "cssec-database",
    storageBucket: "cssec-database.appspot.com",
    messagingSenderId: "46842289714",
    appId: "1:46842289714:web:49c5b84bc936a6ea4aa62b",
    measurementId: "G-9925BL8KBD",
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
