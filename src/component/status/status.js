import { memo } from "react";
import styles from "./status.styles.module.scss";
import { Description, Title } from "../../styles-components/text";
import Error from "../../assets/img/Error.png";
import Creating from "../../assets/img/Creating.png";
import NotFind from "../../assets/img/NotFind.png";
import NotFound from "../../assets/img/NotFound.png";
import Shout from "../../assets/img/Shout.png";
import Sorry from "../../assets/img/Sorry.png";

function Status({ status }) {
  let [title, img] = ["", null];

  switch (status) {
    case "error-404":
      [title, img] = ["Error-404", Error];
      break;
    case "creating":
      [title, img] = ["Creating", Creating];
      break;
    case "not-find":
      [title, img] = ["Not-Find", NotFind];
      break;
    case "not-found":
      [title, img] = ["Not-Found", NotFound];
      break;
    case "shout":
      [title, img] = ["Shout", Shout];
      break;
    case "sorry":
      [title, img] = ["Sorry", Sorry];
      break;
    default:
      break;
  }

  return (
    <div className={styles.StatusBox}>
      <img src={img} alt="Error-404" />
      <Title size="large" weight="bold" align="center">
        {title}
      </Title>
      <Description size="medium" align="center">
        description description
      </Description>
    </div>
  );
}

export default memo(Status);
