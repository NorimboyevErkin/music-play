import React, { useContext, useEffect } from "react";
import styles from "./home.styles.module.scss";
import SongAlbumCard from "../../component/song-album-card/songAlbumCard";
import { Title } from "../../styles-components/text";
import Loading from "../../component/loading/loading";
import { CurrentAlbum } from "../../utils/context";

function Home() {
  const { albums } = useContext(CurrentAlbum);
  const { album, setalbum } = albums;
  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <>
      {album.length > 0 ? (
        <div className={styles.HomeBox}>
          <Title size="medium">All top music album</Title>
          <div className={styles.HomeBoxGrid}>
            {album.map((item, index) => (
              <SongAlbumCard key={index} data={item} />
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.HomeLoading}>
          <Loading />
        </div>
      )}
    </>
  );
}

export default Home;
