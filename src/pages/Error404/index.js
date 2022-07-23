import  Error  from "../../assets/img/Error.png";
import { Description, Title } from "../../styles-components/text";
import Status from "../../component/status/status";
function Error404() {
  return (
    // <div className={styles.Error404Box}>
    //   <img src={Error} alt="Error-404" />
    //   <Title size="large" weight="bold" align="center">
    //     Error 404
    //   </Title>
    //   <Description size="medium" align="center">
    //     description description
    //   </Description>
    // </div>
    <Status status="error-404" />
  );
}

export default Error404;
