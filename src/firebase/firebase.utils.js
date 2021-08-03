import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA5-WzOUI7Y52h1f_SPYJE3AgGmHL-nnkY",
    authDomain: "cubators.firebaseapp.com",
    projectId: "cubators",
    storageBucket: "cubators.appspot.com",
    messagingSenderId: "484804257735",
    appId: "1:484804257735:web:ff0d060595017a21a99be2",
    measurementId: "G-FLQ5P9GT47"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;