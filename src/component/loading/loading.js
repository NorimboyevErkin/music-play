import { memo } from "react";
import styles from "./loading.styles.module.scss";
function Loading({ type , ...others}) {
  return (
    <>
      {type === "song-effect" ? (
        <div className={styles.LoadingSongEffectBox} title="4" {...others}>
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="21px"
            height="24px"
            viewBox="0 0 21 24"
            space="preserve"
            className={styles.LoadingBoxSvg}
          >
            <rect x="0" y="0" width="3" height="7" fill="var(--green)">
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="scale"
                values="1,1; 1,3; 1,1"
                begin="0s"
                dur="0.8s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="6" y="0" width="3" height="7" fill="var(--green)">
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="scale"
                values="1,1; 1,3; 1,1"
                begin="0.2s"
                dur="0.8s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="12" y="0" width="3" height="7" fill="var(--green)">
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="scale"
                values="1,1; 1,3; 1,1"
                begin="0.4s"
                dur="0.8s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="18" y="0" width="3" height="7" fill="var(--green)">
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="scale"
                values="1,1; 1,3; 1,1"
                begin="0.6s"
                dur="0.8s"
                repeatCount="indefinite"
              />
            </rect>
          </svg>
        </div>
      ) : (
        <div className={styles.LoadingBox} {...others}>
          <div className={styles.LoadingBounce1} />
          <div className={styles.LoadingBounce2} />
          <div className={styles.LoadingBounce3} />
        </div>
      )}
    </>
  );
}

export default memo(Loading);
