import SongListItem from "../../component/song-list-item/songListItem";

const playlists = [
  {
    title: "Playlist title 1",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    imgUrl: "https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster",
  },
  {
    title: "Playlist title 2",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    imgUrl: "https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster",
  },
  {
    title: "Playlist title 3",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    imgUrl: "https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster",
  },
  {
    title: "Playlist title 4",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    imgUrl: "https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster",
  },
  {
    title: "Playlist title 5",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    imgUrl: "https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster",
  },
  {
    title: "Playlist title 6",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    imgUrl: "https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster",
  },
  {
    title: "Playlist title 7",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    imgUrl: "https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster",
  },
  {
    title: "Playlist title 8",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    imgUrl: "https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster",
  },
  {
    title: "Playlist title 9",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    imgUrl: "https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster",
  },
];

function Library() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection:"column",
        flexWrap: "wrap",
        padding: "2rem 1rem",
      }}
    >
      {playlists.map((item, index) => (
        <SongListItem
          key={index}
          imgUrl={item.imgUrl}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default Library;
