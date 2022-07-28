import { memo } from "react";
import { Spotify } from "../../assets/icon/icon";
import styles from "./logo.styles.module.scss";
function Logo({ ...others }) {
  return (
    <a {...others}>
      <div className={styles.LogoBox}>
        <Spotify color="var(--white-text)"/>
        <h2>Spotify</h2>
      </div>
    </a>
  );
}

export default memo(Logo);
