import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPCPmBv4relVHgOv8owHHkY6GNBcWAkr4",
  authDomain: "fir-demo-f4911.firebaseapp.com",
  projectId: "fir-demo-f4911",
  storageBucket: "fir-demo-f4911.appspot.com",
  messagingSenderId: "282231116818",
  appId: "1:282231116818:web:60fa2037859768d3e834cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;