import { useContext, useEffect, useRef } from "react";
import { Back, Prev } from "../../assets/icon/icon";
import { Btn } from "../../styles-components/button";
import { ImgCard } from "../../styles-components/img-card";
import { Description, Title } from "../../styles-components/text";
import { AudioMusic, CurrentMusic, DropMenu } from "../../utils/context";
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
  const { imgUrl, title, description, audioUrl } = currentMusic;

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
      {/* <div className={styles.FullPlayerBoxContainer}> */}
      <div className={styles.FullPlayerBoxTopNav}>
        <Btn
          type="link"
          onClick={() => {
            closeFunc();
          }}
        >
          <Back width="32" height="32" />
        </Btn>
      </div>
      <div className={styles.FullPlayerBoxGrid}>
        <div className={styles.FullPlayerBoxTitle}>
          <Title size="medium" line={1}>
            {title}
          </Title>
          <Description line={1}>{description}</Description>
        </div>
        <div className={styles.FullPlayerBoxInfo}>
          <img src={imgUrl} alt="img" />
          <div className={styles.FullPlayerBoxOptions}>
            <Options isFullScreen={false} />
          </div>
        </div>
        <div className={styles.FullPlayerBoxAction}>
          <Control />
        </div>
      </div>
    </div>
    // </div>
  );
}

export default FullPlayer;
