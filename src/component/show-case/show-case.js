import { memo } from "react";
import styles from "./show-case.styles.module.scss";
function ShowCase({ description, title, imgUrl }) {
  return (
    <div className={styles.ShowCaseBox}>
      {imgUrl ? (
        <img src={imgUrl} alt={title} className={styles.ShowCaseBoxImg} />
      ) : null}
      <div className={styles.ShowCaseBoxInfo}>
        {title ? <h2>{title}</h2> : null}
        {description ? <p>{description}</p> : null}
      </div>
    </div>
  );
}

export default memo(ShowCase);
