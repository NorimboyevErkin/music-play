import { ImgCard } from "./styles-components/img-card";
import { Description, Title } from "./styles-components/text";
import CategoryCard from "./component/category-card/category-card";
import SongAlbumCard from "./component/song-album-card/songAlbumCard";
import SongCardPlayer from "./component/song-card-player/songCardPlayer";
import { Pause, PlayFill } from "./assets/icon/icon";
import { Btn } from "./styles-components/button";
import Loading from "./component/loading/loading";
import Range from "./component/range/range";
import Container from "./component/container/container";
import SongListItem from "./component/song-list-item/songListItem";
function Components() {
  const imgUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3chMQpxbCYKZECsoHYIuSztdo8KXb2pSp1g&usqp=CAU";
  const description =
    "Chill Mix Julia Wolf, Khalid, ayokay and more , Khalid, ayokay and more";

  return (
    <Container>
      <ImgCard
        type="bordered"
        width="large"
        height="medium"
        imgUrl={imgUrl}
      ></ImgCard>
      <Title size="large" align="center">
        Top Albums Global
      </Title>
      <ImgCard
        imgUrl={imgUrl}
        type="circle"
        width="large"
        height="large"
      ></ImgCard>
      <Description size="large">The Eminem Show </Description>
      <Btn type="primary">primary</Btn> <br />
      <Btn type="out-line">out-line</Btn>
      <Description>circle-primary</Description>
      <Btn type="circle-primary">
        <PlayFill />
      </Btn>
      <Description>link-hover</Description>
      <Btn type="link-hover" width="60" height="60">
        <Pause />
      </Btn>
      <Description>link</Description>
      <Btn type="link">
        <PlayFill width="40" height="40" color="white" />
      </Btn>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <CategoryCard bgColorNumber={6} title=" Top" imgUrl={imgUrl} />
        <CategoryCard bgColorNumber={0} title="Hip-Hop" imgUrl={imgUrl} />

        <CategoryCard bgColorNumber={4} title="Pop" imgUrl={imgUrl} />

        <CategoryCard
          type="square"
          bgColorNumber={1}
          title=" Top"
          imgUrl={imgUrl}
        />
        <CategoryCard
          type="square"
          bgColorNumber={2}
          title="Hip-Hop"
          imgUrl={imgUrl}
        />

        <CategoryCard
          type="square"
          bgColorNumber={3}
          title="Pop"
          imgUrl={imgUrl}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <SongAlbumCard
          imgUrl={imgUrl}
          title="Top Albums Global"
          description={description}
          imgBorder="50%"
        />
        <SongAlbumCard
          imgUrl={imgUrl}
          title="Top Albums Global"
          description={description}
        />
        <SongAlbumCard
          imgUrl={imgUrl}
          title="Top Albums Global"
          description={description}
          imgBorder="50%"
        />
        <SongAlbumCard
          imgUrl={imgUrl}
          title="Top Albums Global"
          description={description}
        />
      </div>
      <SongCardPlayer
        audioUrl="https://cdns-preview-e.dzcdn.net/stream/c-efe84e57a61d55f279c9f0c988eb4534-6.mp3"
        imgUrl={imgUrl}
        title="Top Albums Global"
        description={description}
      />
      <SongCardPlayer
        audioUrl="https://beardbarnmusicbucket.s3.amazonaws.com/The+Wild+Horse"
        imgUrl={imgUrl}
        title="Top Albums Global"
        description={description}
      />
      <Loading type="song-effect" />
      <Loading />
      <Range />
      <SongListItem
        imgUrl={imgUrl}
        title="Top Albums Global"
        description={description}
      />
    </Container>
  );
}

export default Components;
