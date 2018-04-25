import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
  apiKey: "AIzaSyBPl1k4BiOTGhNKP2JjR_TqIIaw3Bwvde8",
  authDomain: "taller-firebase-22e2f.firebaseapp.com",
  databaseURL: "https://taller-firebase-22e2f.firebaseio.com",
  projectId: "taller-firebase-22e2f",
  storageBucket: "taller-firebase-22e2f.appspot.com",
  messagingSenderId: "275363711375"
};

firebase.initializeApp(config);

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const storage = firebase.storage()
export const db = firebase.firestore()