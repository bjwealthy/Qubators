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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
  

  try{
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData,
    })
  }catch(error){
    alert('error creating user', error.message);
  }
}
return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;