import styles from "./home.styles.module.scss";
import SongAlbumCard from "../../component/song-album-card/songAlbumCard";
import { album } from "../../utils/data/album";
import { Title } from "../../styles-components/text";

function Home() {
  return (
    <div className={styles.HomeBox}>
      <Title size="medium">Top music</Title>
      <div className={styles.HomeBoxGrid}>
        {album.map((item, index) => (
          <SongAlbumCard key={index} data={item} />
        ))}
      </div>
      <Title size="medium">Hip-Hop</Title>
      <div className={styles.HomeBoxGrid}>
        {album.map((item, index) => (
          <SongAlbumCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
