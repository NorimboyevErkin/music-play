import React, { useContext, memo } from "react";
import { Back, Forward } from "../../../assets/icon/icon";
import { Btn } from "../../../styles-components/button";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./header.styles.module.scss";
import Input from "../../input";
import { AiOutlineMenu } from "react-icons/ai";
import { MdTranslate } from "react-icons/md";
import Dropdown from "../../dropdown/dropdown";
import { language } from "../../../utils/data/language";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { DropMenu, CurrentMusic, SearchValue } from "../../../utils/context";
import Options from "../../options/options";

function Header({ changeBg }) {
  const { t, i18n } = useTranslation();
  
  const { dropSide } = useContext(DropMenu);
  const { curMusic } = useContext(CurrentMusic);
  const { search, setsearch } = useContext(SearchValue);
  const { currentMusic, setcurrentMusic } = curMusic;
  const { OpenDropMenu } = dropSide;
  const { openFunc } = OpenDropMenu;
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const menu = (
    <ul>
      {language.map(({ code, name, icon }) => (
        <li
          onClick={() => {
            i18next.changeLanguage(code);
          }}
          key={code}
          className={i18n.language === code ? "active-dropdawn" : null}
        >
          {icon}
          {name}
        </li>
      ))}
    </ul>
  );
  return (
    <header className={changeBg ? styles.HeaderStickyBox : styles.HeaderBox}>
      <div className={styles.HeaderBoxGrid}>
        <div className={styles.HeaderAction}>
          <Btn
            type="link"
            className={styles.HeaderMenuBtn}
            onClick={() => {
              openFunc();
            }}
          >
            <AiOutlineMenu />
          </Btn>
          <Btn
            type="link"
            onClick={() => {
              navigate(-1);
            }}
          >
            <Back width="32" height="32" />
          </Btn>
          <Btn
            type="link"
            onClick={() => {
              navigate(1);
            }}
          >
            <Forward width="32" height="32" />
          </Btn>
        </div>
        {pathname.startsWith("/search") ? (
          <div className={styles.HeaderInput}>
            <Input onChange={setsearch} value={search} />
          </div>
        ) : null}

        <div className={styles.HeaderAccountInfo}>
          <div className={styles.HeaderAccountFullPlayer}>
            {currentMusic.audioUrl ? (
              <Options
                isFullScreen={true}
                isVolume={false}
                isDropdown={false}
              />
            ) : null}
          </div>
          <Dropdown menu={menu} placement="bottomRight">
            <Btn
              type="link"
              className={styles.HeaderMenuBtn}
              color="var(--muted-text)"
            >
              <MdTranslate />
            </Btn>
          </Dropdown>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
