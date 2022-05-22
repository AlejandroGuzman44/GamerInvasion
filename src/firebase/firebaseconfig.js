import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "@firebase/firestore";

//produccion
// const firebaseConfig = {
//   apiKey: "AIzaSyDHYd4W0wym2ubpXSWjCErgP0Nhkg2xolA",
//   authDomain: "gamer-invasion.firebaseapp.com",
//   projectId: "gamer-invasion",
//   storageBucket: "gamer-invasion.appspot.com",
//   messagingSenderId: "851389058984",
//   appId: "1:851389058984:web:74459eb1d6f861e6c5979d"
// };

//pruebas
const firebaseConfig = {
  apiKey: "AIzaSyDpsw5BeXLBfNpmYHhRRcsbHx3zRR-MOCE",
  authDomain: "gamer-prueba.firebaseapp.com",
  projectId: "gamer-prueba",
  storageBucket: "gamer-prueba.appspot.com",
  messagingSenderId: "298651998032",
  appId: "1:298651998032:web:8ec40c14f30df16a183e55"
};

// Initialize Firebase



export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
