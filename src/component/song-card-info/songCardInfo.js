import { ImgCard } from "../../styles-components/img-card";
import { Description, Title } from "../../styles-components/text";
import styles from "./songCardInfo.styles.module.scss";
function SongCardInfo({ imgUrl, title, description }) {
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
          {description}
        </Description>
      </div>
    </div>
  );
}

export default SongCardInfo;
