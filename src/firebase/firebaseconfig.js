import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHYd4W0wym2ubpXSWjCErgP0Nhkg2xolA",
  authDomain: "gamer-invasion.firebaseapp.com",
  projectId: "gamer-invasion",
  storageBucket: "gamer-invasion.appspot.com",
  messagingSenderId: "851389058984",
  appId: "1:851389058984:web:74459eb1d6f861e6c5979d"
};

// Initialize Firebase



export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
