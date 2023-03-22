import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAR4D7D639whzwCrmq86dnTntovJw2lEyA",
  authDomain: "blaze-cooking.firebaseapp.com",
  projectId: "blaze-cooking",
  storageBucket: "blaze-cooking.appspot.com",
  messagingSenderId: "515705017262",
  appId: "1:515705017262:web:c0e3e59d169dc67131ee3f"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };