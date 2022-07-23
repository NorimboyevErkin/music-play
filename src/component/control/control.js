import { useContext, memo} from "react";
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
import { AudioMusic, CurrentMusic } from "../../utils/context";

function Control() {
  const { curMusic, curPlay, curSeekValue, curTime, curDrationTime } =
    useContext(CurrentMusic);
  const  audioMusic = useContext(AudioMusic);
  const { isPlay, setisPlay } = curPlay;
  const { currentMusic, setcurrentMusic } = curMusic;
  const { currentTime, setCurrentTime } = curTime;
  const { durationTime, setdurationTime } = curDrationTime;
  const { seekValue, setSeekValue } = curSeekValue;

  const handlePlay = async () => {
    setisPlay(true);
  };

  const handlePause = () => {
    setisPlay(false);
  };

  const onScrub = (value) => {
    audioMusic.currentTime = value;
  };

  function formatSecondsAsTime(secs) {
    var hr = Math.floor(secs / 3600);
    var min = Math.floor((secs - hr * 3600) / 60);
    var sec = Math.floor(secs - hr * 3600 - min * 60);

    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }

    return min + ":" + sec;
  }
  return (
    <>
      <div className={styles.ControlBox}>
        <div className={styles.ControlBoxActions}>
          <Btn type="link">
            <Shuffle width={25} height={25} />
          </Btn>
          <Btn type="link">
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
          <Btn type="link">
            <Next width={25} height={25} />
          </Btn>
          <Btn type="link">
            <Repeat width={25} height={25} />
          </Btn>
        </div>
        <div className={styles.ControlBoxRange}>
          <span style={{ color: "#ffff" }}>
            {formatSecondsAsTime(currentTime)}
          </span>
          <Range
            onChange={onScrub}
            max={durationTime}
            value={currentTime}
            rightText={formatSecondsAsTime(durationTime)}
            leftText={formatSecondsAsTime(currentTime)}
          />
          <span style={{ color: "#ffff" }}>
            {formatSecondsAsTime(durationTime)}
          </span>
        </div>
      </div>
    </>
  );
}

export default memo(Control);
