import React, { useRef, useContext, useEffect, memo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  HomeFill,
  Library,
  LibraryFill,
  LibraryPlus,
  LikedSongsIcon,
  Search,
  SearchFill,
} from "../../../assets/icon/icon";
import { DropMenu } from "../../../utils/context";
import Line from "../../line/line";
import Logo from "../../logo/logo";
import styles from "./side-menu.styles.module.scss";
import { useTranslation } from "react-i18next";
function SideMenu() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const dropMenu = useRef();
  const Shadow = useRef();

  const { dropSide } = useContext(DropMenu);
  const { setOpenDropMenu} = dropSide;
  const openFunc = () => {
    dropMenu.current.style.left = "0";
    Shadow.current.style.display = "inline-block";
  };

  const closeFunc = () => {
    dropMenu.current.style.left = "-100%";
    Shadow.current.style.display = "none";
  };
  useEffect(() => {
    setOpenDropMenu({
      openFunc: openFunc,
      closeFunc: closeFunc,
    });
  }, [dropMenu]);

  return (
    <>
      <div
        className={styles.Shadow}
        ref={Shadow}
        onClick={() => closeFunc()}
      ></div>
      <div className={styles.SideMenuBox} ref={dropMenu}>
        <div className={styles.SideMenuBoxLogo}>
          <Logo />
        </div>
        <div className={styles.SideMenuBoxNavbar}>
          <ul>
            <li>
              {pathname === "/" || pathname === "" || pathname === "/#" ? (
                <NavLink to="/" className={styles.activeLink}>
                  <HomeFill color="var(--white-text)" />
                  {t("Home")}
                </NavLink>
              ) : (
                <NavLink to="/">
                  <Home color="var(--white-text)" />
                  {t("Home")}
                </NavLink>
              )}
            </li>
            <li>
              {pathname.startsWith("/search") ? (
                <NavLink to="/search" className={styles.activeLink}>
                  <SearchFill color="var(--white-text)" />
                  {t("Search")}
                </NavLink>
              ) : (
                <NavLink to="/search">
                  <Search color="var(--white-text)" />
                  {t("Search")}
                </NavLink>
              )}
            </li>
            <li>
              {pathname.startsWith("/library") ? (
                <NavLink to="/library" className={styles.activeLink}>
                  <LibraryFill color="var(--white-text)" />
                  {t("Library")}
                </NavLink>
              ) : (
                <NavLink to="/library">
                  <Library color="var(--white-text)" />
                  {t("Library")}
                </NavLink>
              )}
            </li>
          </ul>
        </div>
        <div className={styles.SideMenuBoxNavbarWrapper}>
          <ul>
            <li>
              <NavLink
                to="/play-list"
                className={
                  pathname.startsWith("/play-list") ? styles.activeLink : null
                }
              >
                <LibraryPlus color="var(--white-text)" />
                {t("Play-list")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/liked-songs"
                className={
                  pathname.startsWith("/liked-songs") ? styles.activeLink : null
                }
              >
                <LikedSongsIcon />
                {t("Liked_song")}
              </NavLink>
            </li>
          </ul>
        </div>
        <Line />
        <div className={styles.SideMenuBoxUserPlaylist}></div>
      </div>
    </>
  );
}

export default memo(SideMenu);
