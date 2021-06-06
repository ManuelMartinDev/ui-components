import styled from "styled-components";
import { FlexContainerProps } from "./FlexContainer";
import { shapedComponentStyles } from "../globalStyles/shapedComponents";
import { baseStyles } from "../globalStyles/base";
export const FlexboxContainer = styled.div<FlexContainerProps>`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({ direction }) => direction && direction};
  flex-wrap: ${({ wrap }) => wrap && wrap};
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
  align-items: ${({ alignItems }) => alignItems && alignItems};
  align-content: ${({ alignContent }) => alignContent && alignContent};
  ${shapedComponentStyles}
  ${baseStyles}
`;
