import React, { useRef, useContext, useEffect, memo } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const { dropSide } = useContext(DropMenu);
  const { setOpenDropMenu } = dropSide;
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

  const goOtherPage = (page) => {
    navigate(page);
    closeFunc();
  };

  return (
    <>
      <div
        className={styles.Shadow}
        ref={Shadow}
        onClick={() => closeFunc()}
      ></div>
      <div className={styles.SideMenuBox} ref={dropMenu}>
        <div className={styles.SideMenuBoxLogo}>
          <Logo onClick={() => goOtherPage("/")} />
        </div>
        <div className={styles.SideMenuBoxNavbar}>
          <ul>
            <li onClick={() => goOtherPage("/")}>
              {pathname === "/" || pathname === "" || pathname === "/#" ? (
                <a className={styles.activeLink}>
                  <HomeFill color="var(--white-text)" />
                  {t("Home")}
                </a>
              ) : (
                <a>
                  <Home color="var(--white-text)" />
                  {t("Home")}
                </a>
              )}
            </li>
            <li onClick={() => goOtherPage("/search")}>
              {pathname.startsWith("/search") ? (
                <a className={styles.activeLink}>
                  <SearchFill color="var(--white-text)" />
                  {t("Search")}
                </a>
              ) : (
                <a>
                  <Search color="var(--white-text)" />
                  {t("Search")}
                </a>
              )}
            </li>
            <li onClick={() => goOtherPage("/library")}>
              {pathname.startsWith("/library") ? (
                <a className={styles.activeLink}>
                  <LibraryFill color="var(--white-text)" />
                  {t("Library")}
                </a>
              ) : (
                <a>
                  <Library color="var(--white-text)" />
                  {t("Library")}
                </a>
              )}
            </li>
          </ul>
        </div>
        <div className={styles.SideMenuBoxNavbarWrapper}>
          <ul>
            <li onClick={() => goOtherPage("/play-list")}>
              <a
                className={
                  pathname.startsWith("/play-list") ? styles.activeLink : null
                }
              >
                <LibraryPlus color="var(--white-text)" />
                {t("Play-list")}
              </a>
            </li>
            <li onClick={() => goOtherPage("/liked-songs")}>
              <a
                className={
                  pathname.startsWith("/liked-songs") ? styles.activeLink : null
                }
              >
                <LikedSongsIcon />
                {t("Liked_song")}
              </a>
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
