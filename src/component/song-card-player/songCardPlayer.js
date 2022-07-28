import React, { memo, useContext, useEffect } from "react";
import styles from "./songCardPlayer.styles.module.scss";
import SongCardInfo from "../song-card-info/songCardInfo";
import Control from "../control/control";
import Options from "../options/options";
import Like from "../like/like";
import {
  AudioMusic,
  CurrentMusic,
  CurrentAlbum,
  MusicOptions,
} from "../../utils/context";
import { Title } from "../../styles-components/text";
import { useTranslation } from "react-i18next";
import Loading from "../loading/loading";

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
  const { curAlbum, curAlbumSongIndex } = useContext(CurrentAlbum);
  const { currentAlbum, setcurrentAlbum } = curAlbum;
  const { currentAlbumSongsIndex, setcurrentAlbumSongsIndex } =
    curAlbumSongIndex;

  const { shuffle, repeat } = useContext(MusicOptions);
  const { isShuffle, setisShuffle } = shuffle;
  const { isRepeat, setisRepeat } = repeat;

  const { currentMusic, setcurrentMusic } = curMusic;
  const { currentTime, setCurrentTime } = curTime;
  const { durationTime, setdurationTime } = curDrationTime;
  const { seekValue, setSeekValue } = curSeekValue;
  const { isPlay, setisPlay } = curPlay;
  const { volume, setvolume } = curVolume;
  const { speed, setspeed } = curSpeed;
  const { id, imgUrl, title, artist, audioUrl } = currentMusic;
  console.log(id, "id");
  // put music src
  useEffect(() => {
    const changeMusic = async () => {
      await setisPlay(false);
      audioMusic.src = audioUrl;
      setisPlay(true);
    };

    if (currentMusic.audioUrl) {
      changeMusic();
    }
  }, [currentMusic]);

  // next ,prev
  useEffect(() => {
    if (currentAlbum) {
      setcurrentMusic(currentAlbum.songs[currentAlbumSongsIndex]);
    }
  }, [currentAlbumSongsIndex]);
  // set volume
  useEffect(() => {
    audioMusic.volume = volume;
  }, [volume]);

  // set speed
  useEffect(() => {
    audioMusic.playbackRate = speed;
  }, [speed]);

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

  // next
  const next = async () => {
    if (currentAlbum?.songs[currentAlbumSongsIndex + 1]) {
      await setcurrentAlbumSongsIndex(currentAlbumSongsIndex + 1);
    } else {
      await setcurrentAlbumSongsIndex(0);
    }
  };

  const onShuffle = async () => {
    await setcurrentAlbumSongsIndex(
      Math.ceil(Math.random() * currentAlbum.songs.length - 1)
    );
  };
  const onRepeat = async () => {
    await setisPlay(false);
    setisPlay(true);
  };
  const handleEnded = async () => {
    setSeekValue(0);
    setCurrentTime(0);
    if (isShuffle) {
      onShuffle();
    } else if (isRepeat) {
      onRepeat();
    } else {
      next();
    }
  };

  const onPlaying = () => {
    setCurrentTime(audioMusic.currentTime);
    setSeekValue((audioMusic.currentTime / audioMusic?.duration) * 100);
  };
  const onLoading = () => {
    setdurationTime(audioMusic?.duration);
  };

  // put func
  audioMusic.onloadedmetadata = onLoading;
  audioMusic.ontimeupdate = onPlaying;
  audioMusic.onended = handleEnded;

  return (
    <>
      {currentMusic.audioUrl ? (
        <>
          <div className={styles.SongCardPlayerBox}>
            <div className={styles.SongCardPlayerGrid}>
              <div className={styles.SongCardPlayerInfo}>
                <SongCardInfo imgUrl={imgUrl} artist={artist} title={title} />
                <div className={styles.SongCardPlayerLike}>
                  <Like data={currentMusic} />
                </div>
              </div>
              <div className={styles.SongCardPlayerAction}>
                <Control />
              </div>
              <div className={styles.SongCardPlayerOptions}>
                <Options />
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
