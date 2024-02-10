import firebase from "firebase";
// import "firebase/compat/firestore";
// import "firebase/compat/auth";
// import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCiTeyHqYr1cte0T6wYg-hC14GlsJLvW0o",
    authDomain: "eyestea-ae091.firebaseapp.com",
    projectId: "eyestea-ae091",
    storageBucket: "eyestea-ae091.appspot.com",
    messagingSenderId: "108943108289",
    appId: "1:108943108289:web:8ff4c67c248e5afd3ecc40",
    measurementId: "G-2JRFDKH7PE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider, storage};
  export default db;