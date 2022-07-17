import React, { useRef, useContext, useEffect } from "react";
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
function SideMenu() {
  const { pathname } = useLocation();
  const dropMenu = useRef();
  const Shadow = useRef();

  const { setisOpenDropMenu } = useContext(DropMenu);

  const openFunc = () => {
    dropMenu.current.style.left = "0";
    Shadow.current.style.display = "inline-block";
  };

  const closeFunc = () => {
    dropMenu.current.style.left = "-100%";
    Shadow.current.style.display = "none";
  };
  useEffect(() => {
    setisOpenDropMenu({
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
                  <HomeFill />
                  Home
                </NavLink>
              ) : (
                <NavLink to="/">
                  <Home />
                  Home
                </NavLink>
              )}
            </li>
            <li>
              {pathname.startsWith("/search") ? (
                <NavLink to="/search" className={styles.activeLink}>
                  <SearchFill />
                  Search
                </NavLink>
              ) : (
                <NavLink to="/search">
                  <Search />
                  Search
                </NavLink>
              )}
            </li>
            <li>
              {pathname.startsWith("/library") ? (
                <NavLink to="/library" className={styles.activeLink}>
                  <LibraryFill />
                  Your Library
                </NavLink>
              ) : (
                <NavLink to="/library">
                  <Library />
                  Your Library
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
                <LibraryPlus />
                Create PlayList
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
                Liked Songs
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

export default SideMenu;
