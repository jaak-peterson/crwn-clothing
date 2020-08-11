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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  
  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch(error) {
      console.log('error creating user', error.message);
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