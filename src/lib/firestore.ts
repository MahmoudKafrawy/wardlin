// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOFYxtopRoiSP2apWTNETcuXQS3aolGi0",
  authDomain: "wardlin-11ed5.firebaseapp.com",
  projectId: "wardlin-11ed5",
  storageBucket: "wardlin-11ed5.appspot.com",
  messagingSenderId: "479957982348",
  appId: "1:479957982348:web:b5000877c3f2d38f262fa9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export { app as firebaseApp };
