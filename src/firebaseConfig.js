import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "************",
  authDomain: "************",
  databaseURL: "************",
  projectId: "************",
  storageBucket: "************",
  messagingSenderId: "************",
  appId: "************"

};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;