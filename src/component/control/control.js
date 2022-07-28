import { useContext, memo } from "react";
import {
  Next,
  PauseFill,
  PlayFill,
  Prev,
  Repeat,
  Shuffle,
} from "../../assets/icon/icon";
import { Btn } from "../../styles-components/button";
import Range from "../range/range";
import styles from "./control.styles.module.scss";
import {
  AudioMusic,
  CurrentMusic,
  MusicOptions,
  CurrentAlbum,
} from "../../utils/context";

function Control() {
  const { curMusic, curPlay, curSeekValue, curTime, curDrationTime } =
    useContext(CurrentMusic);
  const audioMusic = useContext(AudioMusic);
  const { shuffle, repeat } = useContext(MusicOptions);

  const { curAlbum, curAlbumSongIndex } = useContext(CurrentAlbum);
  const { currentAlbum, setcurrentAlbum } = curAlbum;
  const { currentAlbumSongsIndex, setcurrentAlbumSongsIndex } =
    curAlbumSongIndex;

  const { isShuffle, setisShuffle } = shuffle;
  const { isRepeat, setisRepeat } = repeat;
  const { isPlay, setisPlay } = curPlay;
  const { currentTime, setCurrentTime } = curTime;
  const { durationTime, setdurationTime } = curDrationTime;
  const { seekValue, setSeekValue } = curSeekValue;

  const handlePlay = () => {
    setisPlay(true);
  };

  const handlePause = () => {
    setisPlay(false);
  };

  const onScrub = (value) => {
    audioMusic.currentTime = value;
  };

  const formatSecondsAsTime = (second) => {
    let hr = Math.floor(second / 3600);
    let min = Math.floor((second - hr * 3600) / 60);
    let sec = Math.floor(second - hr * 3600 - min * 60);

    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }

    return min + ":" + sec;
  };

  // prev
  const handlePrev = () => {
    if (currentAlbum.songs[currentAlbumSongsIndex - 1]) {
      setcurrentAlbumSongsIndex(currentAlbumSongsIndex - 1);
    } else {
      setcurrentAlbumSongsIndex(currentAlbum.songs.length - 1);
    }
  };
  // next
  const handleNext = () => {
    if (currentAlbum?.songs[currentAlbumSongsIndex + 1]) {
      setcurrentAlbumSongsIndex(currentAlbumSongsIndex + 1);
    } else {
      setcurrentAlbumSongsIndex(0);
    }
  };
  return (
    <>
      <div className={styles.ControlBox}>
        <div className={styles.ControlBoxActions}>
          <Btn
            type="link"
            onClick={() => {
              if (!isRepeat) {
                setisShuffle(!isShuffle);
              }
            }}
          >
            <Shuffle
              width={25}
              height={25}
              color={isShuffle ? "var(--green)" : "#BABABA"}
            />
          </Btn>
          <Btn type="link" onClick={() => handlePrev()}>
            <Prev width={25} height={25} />
          </Btn>
          {isPlay ? (
            <Btn
              type="circle-primary"
              onClick={() => {
                handlePause();
              }}
            >
              <PauseFill />
            </Btn>
          ) : (
            <Btn
              type="circle-primary"
              onClick={() => {
                handlePlay();
              }}
            >
              <PlayFill />
            </Btn>
          )}
          <Btn type="link" onClick={() => handleNext()}>
            <Next width={25} height={25} />
          </Btn>
          <Btn
            type="link"
            onClick={() => {
              if (!isShuffle) {
                setisRepeat(!isRepeat);
              }
            }}
          >
            <Repeat
              width={25}
              height={25}
              color={isRepeat ? "var(--green)" : "#BABABA"}
            />
          </Btn>
        </div>
        <div className={styles.ControlBoxRange}>
          <span style={{ color: "#ffff", zIndex: 2 }}>
            {formatSecondsAsTime(currentTime)}
          </span>
          <Range
            onChange={onScrub}
            max={durationTime}
            value={currentTime}
            rightText={formatSecondsAsTime(durationTime)}
            leftText={formatSecondsAsTime(currentTime)}
          />
          <span style={{ color: "#ffff", zIndex: 2 }}>
            {formatSecondsAsTime(durationTime)}
          </span>
        </div>
      </div>
    </>
  );
}

export default memo(Control);
