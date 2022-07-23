import { memo } from "react";
import { Btn } from "../../../styles-components/button";
import { Title } from "../../../styles-components/text";
import { FooterNav, FooterNavInfo } from "../../../utils/data/footer-nav";
import { SocialShare } from "../../../utils/data/footer-social";
import styles from "./footer.styles.module.scss";
import { Tooltip } from "antd";
import Line from "../../line/line";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={styles.FooterBox}>
      <div className={styles.FooterBoxGrid}>
        <div className={styles.FooterBoxNavbar}>
          <div className={styles.FooterBoxNav}>
            {FooterNav.map((item, index) => (
              <ul key={index}>
                <Title weight="bold">{t(`${item.name}`)}</Title>
                {item.children.map((item1, index1) => (
                  <li key={index1}>
                    <a href={item1.url}>{t(`${item1.name}`)}</a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className={styles.FooterBoxSocialShare}>
            <ul>
              {SocialShare.map((item, index) => (
                <li key={index}>
                  <Tooltip placement="bottom" title={item.name}>
                    <Btn to={item.link} type="link-hover">
                      {item.Social}
                    </Btn>
                  </Tooltip>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Line />
        <div className={styles.FooterBoxInfo}>
          <ul>
            {FooterNavInfo.map((item, index) => (
              <li key={index}>
                <a href={item.url}>{t(`${item.name}`)}</a>
              </li>
            ))}
          </ul>
          <ul>
            <a href="#">© 2022 Spotify AB</a>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
