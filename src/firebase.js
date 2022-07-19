// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	// apiKey: "AIzaSyBsVPIiTB-Mw9ePANHn37mjJkX9mz9IN0Y",
	// authDomain: "tapnhire-67b12.firebaseapp.com",
	// databaseURL: "https://tapnhire-67b12-default-rtdb.firebaseio.com",
	// projectId: "tapnhire-67b12",
	// storageBucket: "tapnhire-67b12.appspot.com",
	// messagingSenderId: "763365539023",
	// appId: "1:763365539023:web:3cf60a4c70ef1341c14bba",
	apiKey: "AIzaSyAMtngP9rg3uipaTqQhIPB0WW9HjNXHCWc",
	authDomain: "tapnhire-fyp.firebaseapp.com",
	projectId: "tapnhire-fyp",
	storageBucket: "tapnhire-fyp.appspot.com",
	messagingSenderId: "116298829480",
	appId: "1:116298829480:web:c939b11c3125e5c17c3c9d",
	measurementId: "G-W7HYSE0E3Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { signInWithEmailAndPassword, createUserWithEmailAndPassword, auth, db };
