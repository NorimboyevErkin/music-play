import { Description } from "../../styles-components/text";
import { OptionsIcon } from "../../assets/icon/icon";
import styles from "./album-list-items-title.styles.module.scss";
import { useTranslation } from "react-i18next";
function SongListItemTitle() {
  const {t} = useTranslation();
  return (
    <div className={styles.SongListItemTitleBox}>
      <Description align="start" weight="bold">
        # {t("Title")}
      </Description>
      <Description align="center" weight="bold">
        {t("Album")}
      </Description>
      <Description align="end" weight="bold">
        <OptionsIcon />
      </Description>
    </div>
  );
}

export default SongListItemTitle;
