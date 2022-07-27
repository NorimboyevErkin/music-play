import React, { useContext } from "react";
import AlbumListItemPage from "../song-list-item-page/album-list-item-page";
import Status from "../../component/status/status";
import { LikedSongsList } from "../../utils/context";
import { album } from "../../utils/data/album";

function LikedSongs() {
  const { likedMusic, likedMusicId } = useContext(LikedSongsList);
  const { likedSongs, setlikedSongs } = likedMusic;
  // const songsArr = ;
  const myAlbum = {
    title: "Liked Songs",
    description: "My Likeds songs !",
    img: "https://misc.scdn.co/liked-songs/liked-songs-300.png",
    songs: likedSongs,
  };
  return (
    <>
      {likedSongs.length > 0 ? (
        <AlbumListItemPage album={myAlbum} />
      ) : (
        <Status status="not-found" />
      )}
    </>
  );
}

export default LikedSongs;
