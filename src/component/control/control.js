import { useState, useContext, useEffect } from "react";
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

function Control({ audioUrl }) {
  const { curMusic, curPlay, curSeekValue, curTime, curDrationTime } =
    useContext(CurrentMusic);
  const { audioMusic, setaudioMusic } = useContext(AudioMusic);
  const { isPlay, setisPlay } = curPlay;
  const { currentMusic, setcurrentMusic } = curMusic;
  const { currentTime, setCurrentTime } = curTime;
  const { durationTime, setdurationTime } = curDrationTime;
  const { seekValue, setSeekValue } = curSeekValue;

  useEffect(() => {
    setcurrentMusic(audioUrl);
  }, [audioUrl]);

  const handlePlay = async () => {
    if (currentMusic) {
      audioMusic?.play();
      setisPlay(true);
    }
  };

  const handlePause = () => {
    audioMusic?.pause();
    setisPlay(false);
  };

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
          <span style={{ color: "#ffff" }}>{currentTime}</span>
          <Range value={{ seekValue, setSeekValue }} />
          <span style={{ color: "#ffff" }}>{currentTime}</span>
        </div>
      </div>
    </>
  );
}

export default Control;
