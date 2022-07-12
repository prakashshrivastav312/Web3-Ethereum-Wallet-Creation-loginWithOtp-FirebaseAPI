import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCK83e3R4ajoLGCyEiVArN2ir3D0SCEJv4",
  authDomain: "sptr-1031d.firebaseapp.com",
  projectId: "sptr-1031d",
  storageBucket: "sptr-1031d.appspot.com",
  messagingSenderId: "974392724720",
  appId: "1:974392724720:web:81e3556598f4f24b4c4635",
  measurementId: "G-YGV1PPW3HS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
