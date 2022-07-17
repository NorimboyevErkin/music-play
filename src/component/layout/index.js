import React, { memo, useContext, useEffect, useRef } from "react";
import Header from "./header/header";
import styles from "./layout.styles.module.scss";
import SideMenu from "./side-menu/side-menu";
import Footer from "./footer/footer";
import SongCardPlayer from "../song-card-player/songCardPlayer";
import { AudioMusic, CurrentMusic } from "../../utils/context";
function Layout({ children }) {
  const audio = useRef();
  const { audioMusic, setaudioMusic } = useContext(AudioMusic);
  const { curMusic, curPlay, curSeekValue, curTime, curDrationTime } =
    useContext(CurrentMusic);
  const { currentMusic, setcurrentMusic } = curMusic;
  const { currentTime, setCurrentTime } = curTime;
  const { durationTime, setdurationTime } = curDrationTime;
  const { seekValue, setSeekValue } = curSeekValue;
  const {isPlay, setisPlay} = curPlay;
  console.log(currentMusic, "currentMusic");
  useEffect(() => {
    setaudioMusic(audio.current);
  }, [audio]);

  const imgUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3chMQpxbCYKZECsoHYIuSztdo8KXb2pSp1g&usqp=CAU";
  const description =
    "Chill Mix Julia Wolf, Khalid, ayokay and more , Khalid, ayokay and more";

  const onPlaying = () => {
    setCurrentTime(audio.current.currentTime);
    setSeekValue((audio.current.currentTime / audio.current.duration) * 100);
    setdurationTime(audio.current?.duration);
  };

  const handleEnded = () => {
    setisPlay(false);
    setSeekValue(0);
    setCurrentTime(0);
  };
  return (
    <>
      <audio ref={audio} onTimeUpdate={onPlaying} onEnded={handleEnded}>
        <source src={currentMusic} />
      </audio>
      <main className={styles.Layout}>
        <div className={styles.LayoutSection}>
          <SideMenu />
          <div className={styles.LayoutMainWrapper}>
            <Header />
            <div className={styles.LayoutDisplay}>{children}</div>
            <Footer />
          </div>
        </div>
        <SongCardPlayer
          audioUrl="https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3"
          imgUrl={imgUrl}
          title="Top Albums Global"
          description={description}
        />
      </main>
    </>
  );
}

export default memo(Layout);
