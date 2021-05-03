import { CtaProps } from "./Cta";
import { shapedComponentStyles } from "../../globalStyles/shapedComponents";
import { styled } from "../../commonInterfaces/themes";
import { baseStyles } from "../../globalStyles/base";
export const Button = styled.button<CtaProps>`
  ${shapedComponentStyles}
  position: relative;
  height: 46px;
  width: 144px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  &:hover {
    background-color: ${({ hoverBg }) => hoverBg ?? null};
    transition: background-color
      ${({ hoverBgTransition }) => hoverBgTransition ?? null};
  }

  ${baseStyles}
`;
