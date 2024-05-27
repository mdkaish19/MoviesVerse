import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlm0lgJhrpRojifSy9_y3kFbZhzograJo",
  authDomain: "moviesverse-f66e1.firebaseapp.com",
  projectId: "moviesverse-f66e1",
  storageBucket: "moviesverse-f66e1.appspot.com",
  messagingSenderId: "730652077839",
  appId: "1:730652077839:web:5883626cc5bb71f0ee587a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "Movie");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;