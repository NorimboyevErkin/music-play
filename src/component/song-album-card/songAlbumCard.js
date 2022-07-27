import React, { memo, useContext, useState, useEffect } from "react";
import { Pause, Play } from "../../assets/icon/icon";
import { Btn } from "../../styles-components/button";
import { Description, Title } from "../../styles-components/text";
import styles from "./songAlbumCard.styles.module.scss";
import { CurrentMusic, CurrentAlbum } from "../../utils/context";
// import { ImgCard } from "../../styles-components/img-card";
import { useNavigate } from "react-router-dom";
function SongAlbumCard({ data }) {
  const { id, title, description, img, songs } = data;
  const { curMusic, curPlay } = useContext(CurrentMusic);
  const { curAlbum, curAlbumSongIndex } = useContext(CurrentAlbum);
  const { currentAlbum, setcurrentAlbum } = curAlbum;
  const { currentAlbumSongsIndex, setcurrentAlbumSongsIndex } =
    curAlbumSongIndex;

  const { currentMusic, setcurrentMusic } = curMusic;
  const { isPlay, setisPlay } = curPlay;
  const [play, setplay] = useState(false);
  const navigate = useNavigate();

  const controll = async (status) => {
    await setisPlay(false);
    await setcurrentAlbumSongsIndex(0);
    if (status === "play") {
     await setcurrentAlbum(data);
     await setcurrentMusic(songs[0]);
      setisPlay(true);
    }
  };

  const goToLibrary = async () => {
    await setcurrentAlbum(data);
    navigate("/library");
  };

  useEffect(() => {
    if (isPlay && currentAlbum) {
      setplay(currentAlbum.id === id);
    } else {
      setplay(false);
    }
  }, [isPlay]);

  return (
    <div
      className={styles.songCardBox}
      onClick={() => {
        goToLibrary();
      }}
    >
      <div className={styles.songCardBoxHeader}>
        {/* <ImgCard imgUrl={imgUrl} height="medium" width="medium" border="4px" /> */}
        <img src={img} alt="img" />
        {play ? (
          <Btn
            type="circle-primary"
            className={styles.songCardBoxButton}
            width="45px"
            height="45px"
            bgColor="var(--green)"
            onClick={(e) => {
              e.stopPropagation();
              controll("pause");
            }}
          >
            <Pause color="black" />
          </Btn>
        ) : (
          <Btn
            type="circle-primary"
            className={styles.songCardBoxButton}
            width="45px"
            height="45px"
            bgColor="var(--green)"
            onClick={(e) => {
              e.stopPropagation();
              controll("play");
            }}
          >
            <Play color="black" />
          </Btn>
        )}
      </div>
      <div className={styles.songCardBoxFooter}>
        <Title line={1} weight="bolder">
          {title}
        </Title>
        <br />
        <Description weight="bolder">{description}</Description>
      </div>
    </div>
  );
}

export default memo(SongAlbumCard);
