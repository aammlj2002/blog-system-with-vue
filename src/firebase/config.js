import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDpbWdeJrSJ-MiwB8qhMvBdWish3Au_0P4",
    authDomain: "vue-blog-system-a9a5c.firebaseapp.com",
    projectId: "vue-blog-system-a9a5c",
    storageBucket: "vue-blog-system-a9a5c.appspot.com",
    messagingSenderId: "737500569553",
    appId: "1:737500569553:web:d0c22375ffc37186688af0"
};

//init firebase
firebase.initializeApp(firebaseConfig);

//database setup
let db = firebase.firestore();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {db, timestamp};