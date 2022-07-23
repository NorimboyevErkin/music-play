import { memo } from "react";
import { Description, Title } from "../../styles-components/text";
import styles from "./show-case.styles.module.scss";
function ShowCase({ description, title, imgUrl }) {
  return (
    <div className={styles.ShowCaseBox}>
      <img src={imgUrl} alt={title} className={styles.ShowCaseBoxImg} />
      <div className={styles.ShowCaseBoxInfo}>
        <Title size="large" weight="bold">
          {title}
        </Title>
        <Description size="medium">{description}</Description>
      </div>
    </div>
  );
}

export default memo(ShowCase);
