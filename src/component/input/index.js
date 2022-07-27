import React, { memo } from "react";
import { Search } from "../../assets/icon/icon";
import styles from "./input.styles.module.scss";

function MyInput({ placeholder = "Search...", onChange ,value}) {
  return (
    <div className={styles.MyInput}>
      <label className={styles.MyInputLabel}>
        <Search />
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
      </label>
    </div>
  );
}

export default memo(MyInput);
