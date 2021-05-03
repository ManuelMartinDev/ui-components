import { css } from "styled-components";
import { BaseProps } from "../commonInterfaces/base";
import { cssifyObject } from "css-in-js-utils";
export const baseStyles = css<BaseProps>`
  ${({ customStyles, theme }) => `@media(max-width:${
    theme.breakpoints.mobile
  }) { 
	${customStyles?.mobile && cssifyObject({ ...customStyles.mobile })}
  }`}
  ${({ customStyles, theme }) => `@media(min-width:${
    theme.breakpoints.tablet
  }) { 
	${customStyles?.tablet && cssifyObject({ ...customStyles.tablet })}
  }`}
    ${({ customStyles, theme }) => `@media(min-width:${
    theme.breakpoints.desktop
  }) { 
	${customStyles?.desktop && cssifyObject({ ...customStyles.desktop })}
  }`}
`;
