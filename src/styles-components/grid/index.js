import { memo } from "react";
import styled from "styled-components";

const Grid = memo(styled.div`
  display: grid;
  grid-template-columns: ${({ width }) =>
    `repeat(auto-fill, minmax(${width}, 1fr))`};
  grid-gap: 1rem;
`);

export { Grid };
