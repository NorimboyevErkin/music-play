import React, { useState } from "react";
import { OptionsIcon, Pause, Play } from "../../assets/icon/icon";
import { Btn } from "../../styles-components/button";
import Like from "../like/like";
import Loading from "../loading/loading";
import SongCardInfo from "../song-card-info/songCardInfo";
import styles from "./songListItem.styles.module.scss";
function SongListItem({ imgUrl, title, description }) {
  const [isPlay, setisPlay] = useState(false);
  return (
    <div className={styles.SongListItemBox}>
      <div className={styles.SongListItemBoxLeft}>
        <div className={styles.SongListItemBoxPlayBtn}>
          {isPlay ? (
            <Btn type="link" onClick={() => setisPlay(false)}>
              <Pause />
            </Btn>
          ) : (
            <Btn type="link" onClick={() => setisPlay(true)}>
              <Play />
            </Btn>
          )}
        </div>
        <SongCardInfo imgUrl={imgUrl} title={title} description={description} />
      </div>
      <div>
        <Loading type="song-effect" />
      </div>
      <div className={styles.SongListItemBoxRight}>
        <Like />
        <Btn type="link">
          <OptionsIcon />
        </Btn>
      </div>
    </div>
  );
}

export default SongListItem;
