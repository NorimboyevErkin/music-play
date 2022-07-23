import { memo } from "react";
import styled from "styled-components";

const Title = memo(styled.h2`
  font-size: ${({ size }) =>
    size && size === "large"
      ? "4rem"
      : size === "medium"
      ? "1.3rem"
      : "1rem"};
  font-weight: ${({ weight }) =>
    weight && weight === "bold" ? "900" : weight === "bolder" ? "600" : "400"};
  text-align: ${({ align }) =>
    align && align === "center" ? "center" : align === "end" ? "end" : "start"};
  color: ${({color})=> color ? color : "var(--white-text)"};
  display: -webkit-inline-box;
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
      ? "1.2rem"
      : "0.875rem"};
  text-align: ${({ align }) =>
    align && align === "center" ? "center" : align === "end" ? "end" : "start"};
  font-weight: ${({ weight }) =>
    weight && weight === "bold" ? "600" : weight === "bolder" ? "500" : "300"};
  color: ${({ color }) => (color ? color : "var(--muted-text)")};
  display: -webkit-inline-box;
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
