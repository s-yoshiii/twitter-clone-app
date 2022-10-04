import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "twitter-clone-app-9a224.firebaseapp.com",
  projectId: "twitter-clone-app-9a224",
  storageBucket: "twitter-clone-app-9a224.appspot.com",
  messagingSenderId: "986257707172",
  appId: process.env.APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
