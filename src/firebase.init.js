import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDJN0sM2RXqtsn20oibC6FsUGgJ9yE4hUA",
    authDomain: "nmk-doctors-portal.firebaseapp.com",
    projectId: "nmk-doctors-portal",
    storageBucket: "nmk-doctors-portal.appspot.com",
    messagingSenderId: "570085440188",
    appId: "1:570085440188:web:7be02d80f1675b98bfeeb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    auth,
}