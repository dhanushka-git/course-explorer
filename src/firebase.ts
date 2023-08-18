// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZV2gijzMCAENScNOxc9OkA47YDNVHLzw",
    authDomain: "course-explorer-549b9.firebaseapp.com",
    projectId: "course-explorer-549b9",
    storageBucket: "course-explorer-549b9.appspot.com",
    messagingSenderId: "432197070005",
    appId: "1:432197070005:web:cbd6fb925dc0d2e95362fc",
    measurementId: "G-B70WJZ3WMD"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);

export const db = getFirestore(App);
