import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA_VLM6EAHxfVaKts8FLtPOvMubaTRO96k",
  authDomain: "react-coderhouse-8926a.firebaseapp.com",
  projectId: "react-coderhouse-8926a",
  storageBucket: "react-coderhouse-8926a.appspot.com",
  messagingSenderId: "746716775049",
  appId: "1:746716775049:web:bdae140e5b55d93e8e3c58"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

