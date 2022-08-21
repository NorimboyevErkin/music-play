import React, { useContext ,useEffect} from "react";
import Status from "../../component/status/status";
import { CurrentAlbum, LibraryAlbum } from "../../utils/context";
import AlbumListItemPage from "../song-list-item-page/album-list-item-page";

function Library() {
  const { curAlbum } = useContext(CurrentAlbum);
  const { libraryAlbum, setlibraryAlbum } = useContext(LibraryAlbum);
  const { currentAlbum } = curAlbum;

      useEffect(() => {
        return () => {
          window.scrollTo(0, 0);
        };
      }, []);
  return (
    <>
      {libraryAlbum ? (
        <AlbumListItemPage album={libraryAlbum} />
      ) : (
        <Status status="not-found" />
      )}
    </>
  );
}

export default Library;
