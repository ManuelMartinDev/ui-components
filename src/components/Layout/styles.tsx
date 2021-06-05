import styled from "styled-components";
import { FlexContainerProps } from "./FlexContainer";
export const FlexboxContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction && direction};
  flex-wrap: ${({ wrap }) => wrap && wrap};
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
  align-items: ${({ alignItems }) => alignItems && alignItems};
  align-content: ${({ alignContent }) => alignContent && alignContent};
`;
