import { memo, useContext, useEffect, useRef } from "react";
import { Back } from "../../assets/icon/icon";
import { Btn } from "../../styles-components/button";
import { Description, Title } from "../../styles-components/text";
import { CurrentMusic, DropMenu, LikedSongsList } from "../../utils/context";
import Control from "../control/control";
import Like from "../like/like";
import Options from "../options/options";
import styles from "./full-player.styles.module.scss";
function FullPlayer() {
  const player = useRef();
  const { curMusic } = useContext(CurrentMusic);
  const { fullPlayer } = useContext(DropMenu);
  const { OpenFullPlayer, setOpenFullPlayer } = fullPlayer;
  const { currentMusic, setcurrentMusic } = curMusic;
  const { imgUrl, title, artist, audioUrl } = currentMusic;
  const { likedMusic, likedMusicId } = useContext(LikedSongsList);
  const { likedSongsId, setlikedSongsId } = likedMusicId;

  const closeFunc = () => {
    player.current.style.bottom = "-100%";
  };
  const openFunc = () => {
    player.current.style.bottom = "0";
  };

  useEffect(() => {
    setOpenFullPlayer({
      openFunc: openFunc,
      closeFunc: closeFunc,
    });
  }, [player]);

  return (
    <div className={styles.FullPlayerBox} ref={player}>
      <div
        className={styles.FullPlayerBoxContainer}
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className={styles.FullPlayerBoxGridShadow}></div>
        <div className={styles.FullPlayerBoxTopBack}>
          <Btn
            type="link"
            onClick={() => {
              closeFunc();
            }}
          >
            <Back width="32" height="32" />
          </Btn>
        </div>
        <div className={styles.FullPlayerBoxTopLike}>
          <Like
            data={currentMusic}
            isLike={likedSongsId.includes(currentMusic.id)}
          />
        </div>
        <div className={styles.FullPlayerBoxGrid}>
          <div className={styles.FullPlayerBoxTitle}>
            <Title size="medium" line={1}>
              {title}
            </Title>
            <Description line={1}>
              {artist?.map((item, index) => (
                <span key={index} style={{ marginRight: "5px" }}>
                  {item}
                </span>
              ))}
            </Description>
          </div>
          <div className={styles.FullPlayerBoxInfo}>
            <img src={imgUrl} alt="img" />
            <Options isFullScreen={false} />
          </div>
          <div className={styles.FullPlayerBoxAction}>
            <Control />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(FullPlayer);
