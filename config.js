import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBqM9JrNCnCUM1BoaE1G44VzqdVstAE9Us",
    authDomain: "proyecto-78-98c16.firebaseapp.com",
    projectId: "proyecto-78-98c16",
    storageBucket: "proyecto-78-98c16.appspot.com",
    messagingSenderId: "395812623200",
    appId: "1:395812623200:web:daa802ab0de9f645d6c405"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


