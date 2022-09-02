import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCzJAenc3nvZXTPV6abMyO07z2zme6Uh9Q",
    authDomain: "crown-clothing-db-3ce55.firebaseapp.com",
    projectId: "crown-clothing-db-3ce55",
    storageBucket: "crown-clothing-db-3ce55.appspot.com",
    messagingSenderId: "406419827077",
    appId: "1:406419827077:web:3a5413b4eb0a187e863cec"
};

const firebasApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            })
        } catch (error) {
            console.log('error creating the user', error.message);
        }

        return userDocRef;
    }
    // if user data does not exist  
    // create/set the document with the data from userAuth in my collection
    // if user data exists
    // return userDocRef
}