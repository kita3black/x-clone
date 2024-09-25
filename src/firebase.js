import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "x-clone-68452.firebaseapp.com",
  projectId: "x-clone-68452",
  storageBucket: "x-clone-68452.appspot.com",
  messagingSenderId: "9999999999",
  appId: "1:9999999999:web:XXXXXXXXXXXXXXXXXXXXXX",
  measurementId: "XXXXXXXXXXXXXXXXXX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
