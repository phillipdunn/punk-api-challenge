import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAgMjS4a2lEIJgseOxfKGKhiqoZ6aKplKg",
    authDomain: "punk-api-challenge.firebaseapp.com",
    databaseURL: "https://punk-api-challenge.firebaseio.com",
    projectId: "punk-api-challenge",
    storageBucket: "punk-api-challenge.appspot.com",
    messagingSenderId: "210010438387",
    appId: "1:210010438387:web:de5b05275df6b6504e5586",
});

export const providerGoogle = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();

export default firebase;
