import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAHaSrLfLV6RU7ywcIQXmYI26GJ5k9CNnE",
  authDomain: "crwn-db-f9f53.firebaseapp.com",
  databaseURL: "https://crwn-db-f9f53.firebaseio.com",
  projectId: "crwn-db-f9f53",
  storageBucket: "crwn-db-f9f53.appspot.com",
  messagingSenderId: "900551512919",
  appId: "1:900551512919:web:ed8bd22b7297108673a412",
  measurementId: "G-RG9T2TPYSM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;