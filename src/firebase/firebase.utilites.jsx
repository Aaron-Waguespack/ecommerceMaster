import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyC-0nsBXEHuGr34o1e-hnmDjc3Kc4cZ0VU",
        authDomain: "ecommerce-project-7746c.firebaseapp.com",
        projectId: "ecommerce-project-7746c",
        storageBucket: "ecommerce-project-7746c.appspot.com",
        messagingSenderId: "416810386059",
        appId: "1:416810386059:web:65ecf70b8eaf606f8b8a8e",
        measurementId: "G-MFD39ZZYS5"
}

//checks to see if user is logging in and store in database
export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`); 

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error){
            console.log('error creating user', error.message);
        }

    }
    return  userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;