import { memo } from "react";
import { ImgCard } from "../../styles-components/img-card";
import { Description, Title } from "../../styles-components/text";
import Loading from "../loading/loading";
import styles from "./songCardInfo.styles.module.scss";
function SongCardInfo({ imgUrl, title, artist }) {
  return (
    <div className={styles.SongCardInfoBox}>
      <div className={styles.SongCardInfoImg}>
        <ImgCard width="small" height="small" imgUrl={imgUrl} />
      </div>
      <div className={styles.SongCardInfoTitles}>
        <Title line={1} weight="bolder">
          {title}
        </Title>
        <Description line={1} weight="bolder">
          {artist.map((item, index) => (
            <span key={index} style={{ marginRight: "5px" }}>
              {item}
            </span>
          ))}
        </Description>
      </div>
    </div>
  );
}

export default memo(SongCardInfo);
