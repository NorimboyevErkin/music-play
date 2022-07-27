import React, { useState, memo, useEffect, useContext } from "react";
import { Pause, Play } from "../../assets/icon/icon";
import { Btn } from "../../styles-components/button";
import { Description } from "../../styles-components/text";
import Like from "../like/like";
import Loading from "../loading/loading";
import SongCardInfo from "../song-card-info/songCardInfo";
import styles from "./album-list-items.styles.module.scss";
import { CurrentMusic, CurrentAlbum } from "../../utils/context";
function SongListItem({ data, index }) {
  const {id, imgUrl, audioUrl, title, artist ,albumName} = data;
  const { curMusic, curPlay } = useContext(CurrentMusic);
  const { curAlbumSongIndex } = useContext(CurrentAlbum);
  const { currentAlbumSongsIndex, setcurrentAlbumSongsIndex } =
    curAlbumSongIndex;
  const { currentMusic, setcurrentMusic } = curMusic;
  const { isPlay, setisPlay } = curPlay;

  const [play, setplay] = useState(false);

  const controll = async (status) => {
    await setcurrentAlbumSongsIndex(index);
    await setisPlay(false);
    if (status === "play") {
      await setcurrentMusic(data);
      await setisPlay(true);
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
        <Like data={data} />
      </div>
    </div>
  );
}

export default memo(SongListItem);
