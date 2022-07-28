import SongAlbumCard from "../../component/song-album-card/songAlbumCard";
import { Grid } from "../../styles-components/grid";
import { album } from "../../utils/data/album";
import { Title } from "../../styles-components/text";

function Home() {
  return (
    <div
      style={{
        padding: "2rem",
      }}
    >
      <Title size="medium">Top music</Title>
      <Grid width="170px">
        {album.map((item, index) => (
          <SongAlbumCard key={index} data={item} />
        ))}
      </Grid>
      <br/>
      <Title size="medium">Hip-Hop</Title>
      <Grid width="170px">
        {album.map((item, index) => (
          <SongAlbumCard key={index} data={item} />
        ))}
      </Grid>
    </div>
  );
}

export default Home;
