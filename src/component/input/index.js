import React, { memo } from "react";
import { Search } from "../../assets/icon/icon";
import styles from "./input.styles.module.scss";

function MyInput({ placeholder = "Search..." }) {
  return (
    <div className={styles.MyInput}>
      <label className={styles.MyInputLabel}>
        <Search  />
        <input type="text" placeholder={placeholder} />
      </label>
    </div>
  );
}

export default memo(MyInput);
