import baseStyled, { ThemedStyledInterface } from "styled-components";
interface Colors {
  primary: string;
  warning: string;
  danger: string;
  dark: string;
}
interface BorderShape {
  sharp: string;
  rounded: string;
  extraRounded: string;
}

interface Shadows {
  small: string;
  normal: string;
  medium: string;
  big: string;
  extra: string;
  inner: string;
}

type screenSize = `${number}px`;

interface Breakpoints {
  mobile: screenSize;
  tablet: screenSize;
  desktop: screenSize;
}

export interface Theme {
  colors: Colors;
  borders: BorderShape;
  shadows: Shadows;
  breakpoints: Breakpoints;
}

export const styled = baseStyled as ThemedStyledInterface<Theme>;
