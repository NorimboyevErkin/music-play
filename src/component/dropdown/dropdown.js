import { memo } from "react";
import { Dropdown } from "antd";
import "./dropdown.styles.scss";

function MyDropdown({ menu, trigger = "click", placement = "top", children }) {
  return (
    <Dropdown overlay={menu} trigger={[trigger]} placement={placement}>
      {children}
    </Dropdown>
  );
}

export default memo(MyDropdown);
