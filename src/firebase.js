import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByDTUqtTZVJor8bn0AOQ7G7P4K_vZBMM0",
  authDomain: "netflix-clone-28d7d.firebaseapp.com",
  projectId: "netflix-clone-28d7d",
  storageBucket: "netflix-clone-28d7d.appspot.com",
  messagingSenderId: "769673576049",
  appId: "1:769673576049:web:c87cd71c62fe6d13b925d0",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
