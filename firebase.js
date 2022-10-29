
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBW1azM5UlIsBVrW9k94fogTuueTDAROB8",
  authDomain: "fooddas-63d2a.firebaseapp.com",
  projectId: "fooddas-63d2a",
  storageBucket: "fooddas-63d2a.appspot.com",
  messagingSenderId: "294973363037",
  appId: "1:294973363037:web:0bd8523c3fdfb05e11ceb4",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
