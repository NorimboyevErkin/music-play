import React, { useState, useRef, memo, useContext ,useEffect} from "react";
import styles from "./songCardPlayer.styles.module.scss";
import SongCardInfo from "../song-card-info/songCardInfo";
import Control from "../control/control";
import Options from "../options/options";
import Like from "../like/like";

function SongCardPlayer({ imgUrl, audioUrl, title, description }) {

  // const menu = (
  //   <Menu
  //     selectable
  //     defaultSelectedKeys={["1-3"]}
  //     items={[
  //       {
  //         key: "1",
  //         label: <a>Speed</a>,
  //         children: [
  //           {
  //             key: "1-1",
  //             label: <a onClick={() => setSpeed(0.5)}>0.5x speed</a>,
  //           },
  //           {
  //             key: "1-2",
  //             label: <a onClick={() => setSpeed(0.75)}>0.75x speed</a>,
  //           },
  //           {
  //             key: "1-3",
  //             label: <a onClick={() => setSpeed(1)}>normal</a>,
  //           },
  //           {
  //             key: "1-4",
  //             label: <a onClick={() => setSpeed(1.5)}>1.5x speed</a>,
  //           },
  //           {
  //             key: "1-5",
  //             label: <a onClick={() => setSpeed(2)}>2x speed</a>,
  //           },
  //         ],
  //       },
  //       {
  //         key: "2",
  //         label: <a>Volume</a>,
  //         children: [
  //           {
  //             key: "2-1",
  //             label: (
  //               <Slider
  //                 style={{ width: "200px" }}
  //                 defaultValue={1}
  //                 max={1}
  //                 min={0}
  //                 step={0.1}
  //                 tooltipVisible
  //                 tipFormatter={null}
  //                 onChange={(volume) => {
  //                   changeVolume(volume);
  //                 }}
  //               />
  //             ),
  //           },
  //         ],
  //       },
  //       {
  //         key: "3",
  //         disabled: true,
  //         label: <a>Download</a>,
  //       },
  //     ]}
  //   />
  // );

  // const handlePlay = () => {
  //   let audios = document.getElementsByTagName("audio");
  //   for (let i = 0; i < audios.length; i++) {
  //     if (audios[i] != audio.current) {
  //       audios[i].pause();
  //       audios[i].currentTime = 0;
  //       audios[i].setAttribute("isPlay", false);
  //     } else {
  //       audios[i].play();
  //       audios[i].setAttribute("isPlay", true);
  //     }
  //   }
  // };

  // const handleStop = () => {
  //   audio.current.pause();
  //   audio.current.setAttribute("isPlay", false);
  // };
  // const setSpeed = (speed) => {
  //   audio.current.playbackRate = speed;
  // };
  // const changeVolume = (volume) => {
  //   audio.current.volume = volume;
  // };

  return (
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
            <Control audioUrl={audioUrl} />
          </div>
          <div className={styles.SongCardPlayerOptions}>
            <Options />
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(SongCardPlayer);
