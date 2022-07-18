import firebase from "firebase/app";
import "firebase/auth";


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDdboKJXuIDoivpIbdYqXSGhTeESUW0IAA",
  authDomain: "flipkartgrid0.firebaseapp.com",
  projectId: "flipkartgrid0",
  storageBucket: "flipkartgrid0.appspot.com",
  messagingSenderId: "620834919112",
  appId: "1:620834919112:web:e864a5ead0ce0f26accbfd"
  
};
  // Initialize Firebase

    firebase.initializeApp(firebaseConfig);

  

  // exporting firebase
  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 
