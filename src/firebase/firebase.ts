import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
