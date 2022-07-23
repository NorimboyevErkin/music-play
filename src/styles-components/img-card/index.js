import { memo } from "react";
import styled from "styled-components";

const ImgCard = memo(styled.div`
  width: ${({ width }) =>
    width && width === "large"
      ? "400px"
      : width === "medium"
      ? "168px"
      : width === "small"
      ? "60px"
      : width};
  height: ${({ height }) =>
    height && height === "large"
      ? "400px"
      : height === "medium"
      ? "168px"
      : height === "small"
      ? "60px"
      : height};
  border-radius: ${({ border }) => border && border};
  background: ${({ imgUrl }) => imgUrl && `url(${imgUrl})`};
  background-size: cover;
  background-position: center top;
  box-shadow: var(--box-shadow);
  cursor: pointer;
  @media (max-width: 450px) {
    width: ${({ width }) =>
      width && width === "large"
        ? "220px"
        : width === "medium"
        ? "182px"
        : width === "small"
        ? "60px"
        : width};

    height: ${({ height }) =>
      height && height === "large"
        ? "220px"
        : height === "medium"
        ? "182px"
        : height === "small"
        ? "60px"
        : height};
  }
`);

export { ImgCard };
