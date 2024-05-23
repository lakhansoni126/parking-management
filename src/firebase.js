import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDlClLuG20YYd2jK6MCgwsHB3w6sS0ms2U",
    authDomain: "pm-app-4801e.firebaseapp.com",
    projectId: "pm-app-4801e",
    databaseURL: "https://pm-app-4801e-default-rtdb.firebaseio.com",
    storageBucket: "pm-app-4801e.appspot.com",
    messagingSenderId: "652786308495",
    appId: "1:652786308495:web:4871f1673e4ec1072f67fa"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


export { db, auth, googleProvider }