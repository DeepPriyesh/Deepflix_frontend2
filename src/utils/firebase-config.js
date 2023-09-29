import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBTPeY9jB9L7ZqwjwczDwKw0_IRBOGOKrs",
  authDomain: "mern-netflix-clone-fc8d6.firebaseapp.com",
  projectId: "mern-netflix-clone-fc8d6",
  storageBucket: "mern-netflix-clone-fc8d6.appspot.com",
  messagingSenderId: "229116671805",
  appId: "1:229116671805:web:4e6acefce1e38241203754",
  measurementId: "G-ELKGBXY1YV"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
