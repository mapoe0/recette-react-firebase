// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLHdvIK6_0CRTfavNONO8TSPFkh1qVIWE",
    authDomain: "tutoriel-react-medtree.firebaseapp.com",
    projectId: "tutoriel-react-medtree",
    storageBucket: "tutoriel-react-medtree.appspot.com",
    messagingSenderId: "1038352625230",
    appId: "1:1038352625230:web:8a6a8207f4deafab239d1f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)