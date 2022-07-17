import { Dropdown, Menu, Space } from "antd";
import { Polygon, Union } from "../../assets/icon/icon";
import { Btn } from "../../styles-components/button";
import { ImgCard } from "../../styles-components/img-card";
import "./dropdown.styles.scss";
function MyDropdown({ menu, trigger = "click", imgUrl }) {
  return (
    <Dropdown overlay={menu} trigger={[trigger]}>
      <button className="dropdown-Btn" onClick={(e) => e.preventDefault()}>
          {imgUrl ? (
            <ImgCard imgUrl={imgUrl} border="50%" size="34px" />
          ) : (
            <Btn type="link" width="30" height="30">
              <Union width="15" height="15" />
            </Btn>
          )}
          <span>norimboyev</span>
          <Polygon width="16" height="16" />
      </button>
    </Dropdown>
  );
}

export default MyDropdown;
