import React, { useState, memo, useEffect, useContext } from "react";
import { Pause, Play } from "../../assets/icon/icon";
import { Btn } from "../../styles-components/button";
import { Description } from "../../styles-components/text";
import Like from "../like/like";
import Loading from "../loading/loading";
import SongCardInfo from "../song-card-info/songCardInfo";
import styles from "./album-list-items.styles.module.scss";
import {
  CurrentMusic,
  CurrentAlbum,
  LikedSongsList,
} from "../../utils/context";

function SongListItem({ data, index, album }) {
  const { id, imgUrl, audioUrl, title, artist, albumName } = data;
  const { curMusic, curPlay } = useContext(CurrentMusic);
  const { curAlbum, curAlbumSongIndex } = useContext(CurrentAlbum);
  const { currentAlbumSongsIndex, setcurrentAlbumSongsIndex } =
    curAlbumSongIndex;
  const { currentAlbum, setcurrentAlbum } = curAlbum;
  const { currentMusic, setcurrentMusic } = curMusic;
  const { isPlay, setisPlay } = curPlay;

  const [play, setplay] = useState(false);

  const { likedMusic, likedMusicId } = useContext(LikedSongsList);
  const { likedSongsId, setlikedSongsId } = likedMusicId;

  const controll = async (status) => {
    if (status === "play") {
      await setcurrentAlbum(album);
      await setcurrentAlbumSongsIndex(index);
      await setcurrentMusic(data);
      setisPlay(true);
    } else {
      setisPlay(false);
    }
  };

  useEffect(() => {
    if (isPlay) {
      setplay(currentMusic.id === id);
    } else {
      setplay(false);
    }
  }, [isPlay]);

  return (
    <div className={styles.SongListItemBox}>
      <div className={styles.SongListItemBoxLeft}>
        <SongCardInfo imgUrl={imgUrl} title={title} artist={artist} />
      </div>
      <div className={styles.SongListItemBoxCenter}>
        <Description align="center">{albumName}</Description>
      </div>
      <div className={styles.SongListItemBoxRight}>
        {play ? (
          <>
            <Loading type="song-effect" />
            <Btn type="link" onClick={() => controll("pause")}>
              <Pause />
            </Btn>
          </>
        ) : (
          <Btn type="link" onClick={() => controll("play")}>
            <Play />
          </Btn>
        )}
        <Like data={data} isLike={likedSongsId.includes(id)} />
      </div>
    </div>
  );
}

export default memo(SongListItem);
