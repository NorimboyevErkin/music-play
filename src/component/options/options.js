import { FullScreen, OptionsIcon, Volume } from "../../assets/icon/icon";
import { Btn } from "../../styles-components/button";
import Range from "../range/range";
import styles from "./options.styles.module.scss";
function Options() {
  return (
    <div className={styles.OptionsBox}>
      <Btn type="link">
        <OptionsIcon width={25} height={25} />
      </Btn>
      <Btn type="link">
        <Volume width={25} height={25} />
      </Btn>
      <Range width="100px" />
      <Btn type="link">
        <FullScreen width={25} height={25} />
      </Btn>
    </div>
  );
}

export default Options;
