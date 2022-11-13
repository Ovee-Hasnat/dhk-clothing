import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTOVD6S7Y0fDa19MpeH5FQZabikRGGlFA",
  authDomain: "dhk-clothing.firebaseapp.com",
  projectId: "dhk-clothing",
  storageBucket: "dhk-clothing.appspot.com",
  messagingSenderId: "767696955292",
  appId: "1:767696955292:web:52bd801b464c3d1d018a59",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.user.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()){
    const { displayName, email } = userAuth.user;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName, email, createdAt
      });
    }
    catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;


};
