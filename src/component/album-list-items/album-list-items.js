import React, { useState ,memo} from "react";
import { Pause, Play } from "../../assets/icon/icon";
import { Btn } from "../../styles-components/button";
import { Description } from "../../styles-components/text";
import Like from "../like/like";
import Loading from "../loading/loading";
import SongCardInfo from "../song-card-info/songCardInfo";
import styles from "./album-list-items.styles.module.scss";
function SongListItem({ imgUrl, title, description }) {
  const [isPlay, setisPlay] = useState(false);
  return (
    <div className={styles.SongListItemBox}>
      <div className={styles.SongListItemBoxLeft}>
        <SongCardInfo imgUrl={imgUrl} title={title} description={description} />
      </div>
      <div className={styles.SongListItemBoxCenter}>
        <Description align="center">Album name</Description>
      </div>
      <div className={styles.SongListItemBoxRight}>
        <Loading type="song-effect" />
          {isPlay ? (
            <Btn type="link" onClick={() => setisPlay(false)}>
              <Pause />
            </Btn>
          ) : (
            <Btn type="link" onClick={() => setisPlay(true)}>
              <Play />
            </Btn>
          )}
        <Like />
      </div>
    </div>
  );
}

export default memo(SongListItem);
