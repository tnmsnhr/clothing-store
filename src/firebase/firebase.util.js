import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyAxWAUSn3wdnwlte9Z_mutb2ct2LSFK4G4",
    authDomain: "clothing-shop-1ab2e.firebaseapp.com",
    projectId: "clothing-shop-1ab2e",
    storageBucket: "clothing-shop-1ab2e.appspot.com",
    messagingSenderId: "837620411783",
    appId: "1:837620411783:web:db7a686bde3df32caa3722"
  }

  

  if (!firebase.apps.length) {
    firebase.initializeApp(config)
 }else {
    firebase.app(); // if already initialized, use that one
 }

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'})
const signInWithGoogle=()=> auth.signInWithPopup(provider)

  export default signInWithGoogle;
