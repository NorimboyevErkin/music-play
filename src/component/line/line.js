import { memo } from "react";
import styles from "./line.styles.module.scss";
function Line() {
  return <div className={styles.line}></div>;
}

export default memo(Line);
