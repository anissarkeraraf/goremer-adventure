// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5xabDB3JlA_0Oslr-8Oox5vXl18_o2xA",
  authDomain: "gorom-gorom-adventure.firebaseapp.com",
  projectId: "gorom-gorom-adventure",
  storageBucket: "gorom-gorom-adventure.appspot.com",
  messagingSenderId: "824874702781",
  appId: "1:824874702781:web:a6a8b0f877d0f5e6dd24d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;