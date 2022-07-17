import { memo } from "react";
import styled from "styled-components";

const Title = memo(styled.h2`
  font-size: ${({ size }) =>
    size && size === "large"
      ? "2.2rem"
      : size === "medium"
      ? "1.3rem"
      : "1.17rem"};
  font-weight: ${({ weight }) =>
    weight && weight === "bold" ? "600" : weight === "bolder" ? "500" : "400"};
  text-align: ${({ align }) =>
    align && align === "center" ? "center" : align === "end" ? "end" : "start"};
  color: var(--white-text);
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: ${({ line }) => line || 2};
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0 0 5px 0;
`);

const Description = memo(styled.p`
  font-size: ${({ size }) =>
    size && size === "large"
      ? "1.6rem"
      : size === "medium"
      ? "1rem"
      : "0.875rem"};
  text-align: ${({ align }) =>
    align && align === "center" ? "center" : align === "end" ? "end" : "start"};
  font-weight: ${({ weight }) =>
    weight && weight === "bold" ? "600" : weight === "bolder" ? "500" : "300"};
  color: var(--muted-text);
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: ${({ line }) => line || 2};
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0 0 5px 0;
  @media (max-width: 400px) {
    font-size: ${({ size }) =>
      size && size === "large"
        ? "1.3rem"
        : size === "medium"
        ? "1rem"
        : "1rem"};
  }
`);

export { Title, Description };
