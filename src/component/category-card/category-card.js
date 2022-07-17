import React, { memo } from "react";
import styles from "./category-card.styles.module.scss";
function CategoryCard({ type, bgColor, title, imgUrl }) {
  return (
    <div
      className={
        type === "square"
          ? styles.CategoryCardSquareBox
          : styles.CategoryCardBox
      }
      style={{ background: `${bgColor}` }}
    >
      <h2 className={styles.CategoryCardTitle}>{title}</h2>
      <img src={imgUrl} alt={title} className={styles.CategoryCardImg} />
    </div>
  );
}

export default memo(CategoryCard);
