import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSp14RaGK7387shC3npv7SmRKJVNSbmd4",
  authDomain: "music-player-a05bc.firebaseapp.com",
  projectId: "music-player-a05bc",
  storageBucket: "music-player-a05bc.appspot.com",
  messagingSenderId: "898179947936",
  appId: "1:898179947936:web:9ed6be85ae31fdb68698c5",
  measurementId: "G-7NS46459VH",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// async function getCities(db) {
//   const citiesCol = collection(db, "cities");
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map((doc) => doc.data());
//   return cityList;
// }

export default db;
