// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/storage'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey :"AIzaSyAU0iTrvGtVxRpmc1ts01qbZ_gQoBGxzQ0",
 authDomain: "fir-instagram-5079d.firebaseapp.com",
 projectId: "fir-instagram-5079d",
 storageBucket: "fir-instagram-5079d.appspot.com",
 messagingSenderId:  "672734893571",
 appId: "1:672734893571:web:e6e2861bdd013421aee036"
};

// Initialize Firebase
firebase.initializeApp (firebaseConfig);
const auth = firebase.auth()
 const projectStorage=firebase.storage()
 const db=firebase.firestore()
 const timestamp=firebase.firestore.FieldValue.serverTimestamp
 export {auth,projectStorage,db,timestamp}