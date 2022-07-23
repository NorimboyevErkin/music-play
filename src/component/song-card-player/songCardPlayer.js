import React, { memo, useContext, useEffect } from "react";
import styles from "./songCardPlayer.styles.module.scss";
import SongCardInfo from "../song-card-info/songCardInfo";
import Control from "../control/control";
import Options from "../options/options";
import Like from "../like/like";
import { AudioMusic, CurrentMusic } from "../../utils/context";
import { Title } from "../../styles-components/text";
import { useTranslation } from "react-i18next";

function SongCardPlayer() {
  const { t } = useTranslation();

  const audioMusic = useContext(AudioMusic);
  const {
    curSpeed,
    curMusic,
    curPlay,
    curSeekValue,
    curTime,
    curDrationTime,
    curVolume,
  } = useContext(CurrentMusic);
  const { currentMusic, setcurrentMusic } = curMusic;
  const { currentTime, setCurrentTime } = curTime;
  const { durationTime, setdurationTime } = curDrationTime;
  const { seekValue, setSeekValue } = curSeekValue;
  const { isPlay, setisPlay } = curPlay;
  const { volume, setvolume } = curVolume;
  const { speed, setspeed } = curSpeed;
  const { imgUrl, title, description, audioUrl } = currentMusic;

  // put music src
  useEffect(() => {
    audioMusic.src = audioUrl;
  }, [currentMusic]);

  // set volume
  useEffect(() => {
    audioMusic.volume = volume;
  }, [volume]);

  // set speed
  useEffect(() => {
    audioMusic.playbackRate = speed;
  }, [speed]);

  // put func
  useEffect(() => {
    audioMusic.onloadedmetadata = onLoading;
    audioMusic.ontimeupdate = onPlaying;
    audioMusic.onended = handleEnded;
  }, []);

  // play music controll
  useEffect(() => {
    if (isPlay) {
      const playPromise = audioMusic.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("audio played");
          })
          .catch((error) => {
            console.log("playback prevented");
          });
      }
    } else {
      audioMusic.pause();
    }
  }, [isPlay]);

  const handleEnded = () => {
    setisPlay(false);
    setSeekValue(0);
    setCurrentTime(0);
  };
  const onPlaying = () => {
    setCurrentTime(audioMusic.currentTime);
    setSeekValue((audioMusic.currentTime / audioMusic?.duration) * 100);
  };
  const onLoading = () => {
    setdurationTime(audioMusic?.duration);
  };

  return (
    <>
      {currentMusic.audioUrl ? (
        <>
          <div className={styles.SongCardPlayerBox}>
            <div className={styles.SongCardPlayerGrid}>
              <div className={styles.SongCardPlayerInfo}>
                <SongCardInfo
                  imgUrl={imgUrl}
                  description={description}
                  title={title}
                />
                <Like islike={true} />
              </div>
              <div className={styles.SongCardPlayerAction}>
                <Control />
              </div>
              <div className={styles.SongCardPlayerOptions}>
                <Options isLike={false} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.SongCardPlayerBoxEmpty}>
          <Title
            size="medium"
            weight="bolder"
            align="center"
            color="var(--white)"
          >
            {t("Empty_album")}
          </Title>
        </div>
      )}
    </>
  );
}

export default memo(SongCardPlayer);
