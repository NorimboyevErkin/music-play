import { memo } from "react";
import styled from "styled-components";

function typeFunc(props) {
  const { type, bgColor, width, height, color } = props;
 if (type === "out-line") {
    return `
    padding: 0.3rem 1.5rem;
    background:transparent;
    color: ${color || "white"};
    border:1px solid ${bgColor || "var(--white)"};
    border-radius:40px;
    transition:all 0.2s ease-in-out;
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
      &:hover {
    transform:scale(1.03);
    border:1px solid ${bgColor || "var(--white)"};
    }
    `;
  } else if (type === "primary") {
    return `
    padding: 0.3rem 1.5rem;
    background:${bgColor || "var(--white)"};
    color: ${color || "black"};
    border:1px solid ${bgColor || "var(--body-dark)"};
    border-radius:40px;
    transition:transform 0.2s ease-in-out;
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
      &:hover {
    transform:scale(1.02);
    }
    `;
  } else if (type === "circle-primary") {
    return `
    width: ${width || "40px"};
    height: ${height || "40px"};
    background: ${bgColor || "transparent"};
    color: ${color || "white"};
    border-radius:50%;
    transition: transform 0.2s ease-in-out;
      &:hover {
    transform:scale(1.02);
    }
    `;
  } else if (type === "link") {
    return `
    width: ${width || "40px"};
    height: ${height || "40px"};
    background: transparent;
    color: ${color || "var(--white)"};
    border:none;
    border-radius:50%;
    opacity: 0.7;
    transition: opacity 0.2s ease-in-out;
      &:hover {
    opacity: 1;
    }
    `;
  } else {
    return `
    width: ${width || "40px"};
    height: ${height || "40px"};
    background: ${bgColor || "rgba(249, 249, 249,.2)"};
    color: ${color || "var(--white)"};
    border:none;
    border-radius:50%;
    transition: background 0.2s ease-in-out;
    &:hover {
    background: rgba(249, 249, 249,.3);
    }
    `;
  }
}
const Btn = memo(styled.button`
  all: unset;
  ${(props) => typeFunc(props)};
  position: relative;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  cursor: pointer;
  font-weight: 400;
  white-space: nowrap;
`);

export { Btn };
