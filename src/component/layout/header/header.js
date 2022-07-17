import React, { useContext, useState } from "react";
import { Back, Close, Forward } from "../../../assets/icon/icon";
import { Btn } from "../../../styles-components/button";
import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./header.styles.module.scss";
import MyDropdown from "../../dropdown/dropdown";
import Input from "../../input";
import { AiOutlineMenu } from "react-icons/ai";
import { DropMenu } from "../../../utils/context";
import Logo from "../../logo/logo";

const menu = (
  <Menu
    items={[
      {
        label: <a href="#">1st menu item</a>,
        key: "0",
      },
      {
        label: <a href="#">2nd menu item</a>,
        key: "1",
      },
      {
        type: "divider",
      },
      {
        label: "3rd menu item",
        key: "3",
      },
    ]}
  />
);

function Header() {
  const { isOpenDropMenu } = useContext(DropMenu);
  const { openFunc } = isOpenDropMenu;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <header className={styles.HeaderBox}>
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

          {pathname.startsWith("/search") ? (
            <div className={styles.HeaderChild}>
              <Input />
            </div>
          ) : null}
        </div>

        <div className={styles.HeaderAccountInfo}>
          {/* <MyDropdown
            menu={menu}
            imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3chMQpxbCYKZECsoHYIuSztdo8KXb2pSp1g&usqp=CAU"
          /> */}
          <Btn type="primary" bgColor="transparent" color="var(--muted-text)">
            Sign Up
          </Btn>
          <Btn type="primary">Log In</Btn>
        </div>
      </div>
    </header>
  );
}

export default Header;
