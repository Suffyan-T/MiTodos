import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBoTBj2pcn6y-jkbyH5knWzXwCRXxTYD0U",
    authDomain: "todolist-c1caa.firebaseapp.com",
    databaseURL: "https://todolist-c1caa.firebaseio.com",
    projectId: "todolist-c1caa",
    storageBucket: "todolist-c1caa.appspot.com",
    messagingSenderId: "706531548527",
    appId: "1:706531548527:web:c2703753f3d9e2bea71c9a",
    measurementId: "G-2H5C1LFFXY"
  });

const db = firebaseApp.firestore();

export default db