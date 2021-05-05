import { css } from "styled-components";
import { BaseProps } from "../commonInterfaces/base";
import { cssifyObject } from "css-in-js-utils";
export const baseStyles = css<BaseProps>`
  ${({ responsiveStyles, theme }) => `@media(max-width:${
    theme.breakpoints.mobile
  }) { 
	${responsiveStyles?.mobile && cssifyObject({ ...responsiveStyles.mobile })}
  }`}
  ${({ responsiveStyles, theme }) => `@media(min-width:${
    theme.breakpoints.tablet
  }) { 
	${responsiveStyles?.tablet && cssifyObject({ ...responsiveStyles.tablet })}
  }`}
    ${({ responsiveStyles, theme }) => `@media(min-width:${
    theme.breakpoints.desktop
  }) { 
	${responsiveStyles?.desktop && cssifyObject({ ...responsiveStyles.desktop })}
  }`}
    ${({ additionalStyles }) =>
    additionalStyles && cssifyObject({ ...additionalStyles })}
`;
