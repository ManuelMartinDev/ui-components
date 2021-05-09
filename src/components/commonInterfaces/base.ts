import { Theme } from "./themes";
import CSS from "csstype";

export interface Styles {
  mobile: CSS.Properties;
  tablet: CSS.Properties;
  desktop: CSS.Properties;
}
export interface BaseProps {
  theme?: Theme;
  additionalStyles?: CSS.Properties;
  responsiveStyles?: Styles;
}
