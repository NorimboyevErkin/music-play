import { memo, useContext } from "react";
import { Clock, FullScreen, Volume } from "../../assets/icon/icon";
import { Btn } from "../../styles-components/button";
import Range from "../range/range";
import styles from "./options.styles.module.scss";
import { CurrentMusic, DropMenu } from "../../utils/context";
import Dropdown from "../dropdown/dropdown";
import Like from "../like/like";
function Options({
  isFullScreen = true,
  isVolume = true,
  isDropdown = true,
  isLike = true,
}) {
  const { fullPlayer } = useContext(DropMenu);
  const { OpenFullPlayer, setOpenFullPlayer } = fullPlayer;
  const { openFunc } = OpenFullPlayer;

  const { curVolume, curSpeed } = useContext(CurrentMusic);
  const { volume, setvolume } = curVolume;
  const { speed, setspeed } = curSpeed;
  const changeVolume = (volume) => {
    setvolume(volume);
  };
  const changeSpeed = (speed) => {
    setspeed(speed);
  };
  const menu = (
    <ul>
      <li onClick={() => setspeed(0.5)}>0.5X speed</li>
      <li onClick={() => setspeed(1)}>01X speed</li>
      <li onClick={() => setspeed(1.5)}>1.5X speed</li>
    </ul>
  );

  return (
    <div className={styles.OptionsBox}>
      {isDropdown ? (
        <Dropdown menu={menu}>
          <Btn type="link">
            <Clock width={25} height={25} />
          </Btn>
        </Dropdown>
      ) : null}
      <div className={styles.OptionsBoxVolume}>
        {isVolume ? (
          <Btn type="link">
            <Volume width={25} height={25} />
          </Btn>
        ) : null}
        <Range
          onChange={changeVolume}
          min={0}
          max={1}
          step={0.01}
          defaultValue={volume}
        />
      </div>
      {isFullScreen ? (
        <Btn
          type="link"
          onClick={() => {
            openFunc();
          }}
        >
          <FullScreen width={25} height={25} />
        </Btn>
      ) : null}
      {isLike ? <Like /> : null}
    </div>
  );
}

export default memo(Options);
