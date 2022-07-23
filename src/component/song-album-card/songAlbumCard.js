import React, { memo, useContext, useState, useEffect } from "react";
import { Pause, Play } from "../../assets/icon/icon";
import { Btn } from "../../styles-components/button";
import { Description, Title } from "../../styles-components/text";
import styles from "./songAlbumCard.styles.module.scss";
import { CurrentMusic } from "../../utils/context";
import { ImgCard } from "../../styles-components/img-card";

function SongAlbumCard(data) {
  const { id, title, description, imgUrl, audioUrl } = data;
  const { curMusic, curPlay } = useContext(CurrentMusic);
  const { currentMusic, setcurrentMusic } = curMusic;
  const { isPlay, setisPlay } = curPlay;
  const [play, setplay] = useState(false);

  const controll = async (status) => {
    if (status === "pause") {
      await setisPlay(false);
      setplay(false);
    } else {
      await setisPlay(false);
      await setcurrentMusic(data);
      await setisPlay(true);
      setplay(true);
    }
  };

  useEffect(() => {
    setplay(currentMusic.audioUrl === audioUrl);
    // return () => {
    //   setplay(false);
    // };
  }, [isPlay]);
  return (
    <div className={styles.songCardBox}>
      <div className={styles.songCardBoxHeader}>
        <ImgCard imgUrl={imgUrl} height="medium" width="medium" border="4px" />
        {play ? (
          <Btn
            type="circle-primary"
            className={styles.songCardBoxButton}
            width="45px"
            height="45px"
            bgColor="var(--green)"
            onClick={() => {
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
            onClick={() => {
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
