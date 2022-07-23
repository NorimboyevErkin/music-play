import SongAlbumCard from "../../component/song-album-card/songAlbumCard";
import { playlist } from "../../utils/data/playList";
const playlists = [
  {
    id: 1,
    title: "Playlist title 1",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    imgUrl: "https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster",
    audioUrl:
      "http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3",
  },
  {
    id: 2,
    title: "Playlist title 2",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    imgUrl: "https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster",
    audioUrl:
      "https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3",
  },
  {
    id: 3,
    title: "Playlist title 3",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    imgUrl: "https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster",
    audioUrl:
      "https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3",
  },
  {
    id: 4,
    title: "Playlist title 4",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    imgUrl: "https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster",
    audioUrl:
      "https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3",
  },
  {
    id: 5,
    title: "Playlist title 5",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    imgUrl: "https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster",
    audioUrl:
      "https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3",
  },
  {
    id: 6,
    title: "Playlist title 6",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    imgUrl: "https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster",
    audioUrl:
      "https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3",
  },
  {
    id: 7,
    title: "Playlist title 7",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    imgUrl: "https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster",
    audioUrl:
      "https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3",
  },
  {
    id: 8,
    title: "Playlist title 8",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    imgUrl: "https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster",
    audioUrl:
      "https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3",
  },
  {
    id: 9,
    title: "Playlist title 9",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    imgUrl: "https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster",
    audioUrl:
      "https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3",
  },
  {
    id: 10,
    title: "Hope",
    description: "XXXTENTACION",
    imgUrl: "https://api.deezer.com/artist/9822974/image",
    audioUrl:
      "https://cdns-preview-1.dzcdn.net/stream/c-1b0b69637944a3341ce8b66fe4069dbb-6.mp3",
  },
  {
    id: 11,
    title: "Moonlight",
    description: "XXXTENTACION",
    imgUrl: "https://api.deezer.com/artist/9822974/image",
    audioUrl:
      "https://cdns-preview-e.dzcdn.net/stream/c-efe84e57a61d55f279c9f0c988eb4534-6.mp3",
  },
  {
    id: 12,
    title: "Look At Me!",
    description: "XXXTENTACION",
    imgUrl: "https://api.deezer.com/artist/9822974/image",
    audioUrl:
      "https://cdns-preview-f.dzcdn.net/stream/c-f3261b9791943a1c7387779fb4c36292-7.mp3",
  },
];
function Home() {
  return (
    <div
      style={{
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "2rem 1rem",
        gap: "1rem",
      }}
    >
      {playlist.map((item, index) => (
        <SongAlbumCard
          key={index}
          imgUrl={item.imgUrl}
          audioUrl={item.audioUrl}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default Home;
