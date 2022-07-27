import React, { useContext } from "react";
import Status from "../../component/status/status";
import { CurrentAlbum } from "../../utils/context";
import AlbumListItemPage from "../song-list-item-page/album-list-item-page";

function Library() {
  const { curAlbum, curAlbumSongIndex } = useContext(CurrentAlbum);
  const { currentAlbum, setcurrentAlbum } = curAlbum;
  return (
    <>
      {currentAlbum ? (
        <AlbumListItemPage album={currentAlbum} />
      ) : (
        <Status status="not-found" />
      )}
    </>
  );
}

export default Library;
