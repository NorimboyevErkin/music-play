import React, { memo, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentAlbum, LibraryAlbum } from "../../utils/context";
import styles from "./category-card.styles.module.scss";
function CategoryCard({ data }) {
  const { color, title, img } = data;
  const navigate = useNavigate();
  const { curAlbum, curAlbumSongIndex } = useContext(CurrentAlbum);
  const { currentAlbum, setcurrentAlbum } = curAlbum;
  const { libraryAlbum, setlibraryAlbum } = useContext(LibraryAlbum);
  const goToLibrary = async () => {
    await setlibraryAlbum(data);
    await setcurrentAlbum(data);
    navigate("/library");
  };

  return (
    <div
      className={styles.CategoryCardBox}
      style={{ background: `${color}` }}
      onClick={() => {
        goToLibrary();
      }}
    >
      <h2 className={styles.CategoryCardTitle}>{title}</h2>
      <img src={img} alt={title} className={styles.CategoryCardImg} />
    </div>
  );
}

export default memo(CategoryCard);
