import React, { memo, useState } from "react";
import { Pause, PauseFill, PauseFillGreen, Play, PlayFill, PlayFillGreen } from "../../assets/icon/icon";
import { Btn } from "../../styles-components/button";
import { Description, Title } from "../../styles-components/text";
import styles from "./songAlbumCard.styles.module.scss";

function SongAlbumCard({ imgUrl, title, description, imgBorder = "4px" }) {
  const [isPlay, setisPlay] = useState(false);
  return (
    <div className={styles.songCardBox}>
      <div className={styles.songCardBoxHeader}>
        <img src={imgUrl} alt={title} className={styles.songCardBoxImg} />
        {isPlay ? (
          <Btn
            type="circle-primary"
            className={styles.songCardBoxButton}
            width="45px"
            height="45px"
            bgColor="var(--green)"
            onClick={() => {
              setisPlay(false);
            }}
          >
            <Pause color="black" />
          </Btn>
        ) : (
          <Btn
            type="circle-primary"
            className={styles.songCardBoxButton}
            width="45px"
            height="45px"
            bgColor="var(--green)"
            onClick={() => {
              setisPlay(true);
            }}
          >
            <Play color="black" />
          </Btn>
        )}
      </div>
      <Title line={1} weight="bolder">
        {title}
      </Title>
      <Description weight="bolder">{description}</Description>
    </div>
  );
}

export default memo(SongAlbumCard);
