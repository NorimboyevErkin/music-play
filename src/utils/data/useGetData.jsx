import db from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";

const getAlbum = async () => {
  const albumCol = collection(db, "album");
  const albumSnapshot = await getDocs(albumCol);
  const albumList = albumSnapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  
  return albumList;
};
export default getAlbum;
