import React, { memo, useState, useRef, useEffect } from "react";
import Header from "./header/header";
import styles from "./layout.styles.module.scss";
import SideMenu from "./side-menu/side-menu";
import Footer from "./footer/footer";
import SongCardPlayer from "../song-card-player/songCardPlayer";
import FullPlayer from "../full-player/full-player";
function Layout({ children }) {
  const [changeBg, setchangeBg] = useState(false);
  const mainWrapper = useRef();

  const changeScroll = () => {
    mainWrapper.current.scrollTop > 100
      ? setchangeBg(true)
      : setchangeBg(false);
  };
  mainWrapper.current?.addEventListener("scroll", changeScroll);

  return (
    <>
      <main className={styles.Layout}>
        <div className={styles.LayoutSection}>
          <SideMenu />
          <div className={styles.LayoutMainWrapper} ref={mainWrapper}>
            <Header changeBg={changeBg} />
            <div className={styles.LayoutDisplay}>{children}</div>
            <Footer />
          </div>
        </div>
        <SongCardPlayer />
        <FullPlayer />
      </main>
    </>
  );
}

export default memo(Layout);
