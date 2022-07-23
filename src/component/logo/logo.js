import { memo } from "react";
import { Spotify } from "../../assets/icon/icon";
import styles from "./logo.styles.module.scss";
import { NavLink } from "react-router-dom";
function Logo({ ...others }) {
  return (
    <NavLink to="/" {...others}>
      <div className={styles.LogoBox}>
        <Spotify color="var(--white-text)"/>
        <h2>Spotify</h2>
      </div>
    </NavLink>
  );
}

export default memo(Logo);
