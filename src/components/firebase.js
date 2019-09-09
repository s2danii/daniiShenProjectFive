import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBnFd4EpPkymf4nfwULdMwOgoUjXsYofh8",
    authDomain: "brunchto-7d6a9.firebaseapp.com",
    databaseURL: "https://brunchto-7d6a9.firebaseio.com",
    projectId: "brunchto-7d6a9",
    storageBucket: "",
    messagingSenderId: "350614937873",
    appId: "1:350614937873:web:f914c28d7b1193c998acb0"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;