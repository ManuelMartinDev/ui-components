/*
Interface for all the elements with a shape
ex: divs,inputs,headers,footers,navs,etc
*/
import { BaseProps } from "./base";
type Shape = "sharp" | "rounded" | "extraRounded";
type Shadow = "small" | "normal" | "medium" | "big" | "extra" | "inner";
export interface border {
  shape: Shape;
}

export interface complexBorderShape {
  topRight?: Shape;
  topLeft?: Shape;
  bottomRight?: Shape;
  bottomLeft?: Shape;
}

export interface shapedComponentsProps extends BaseProps {
  borderShape?: border["shape"];
  complexBorderShape?: complexBorderShape;
  bgType?: "primary" | "warning" | "danger" | "dark" | "custom";
  customBg?: string;
  darkOnUserPreference?: boolean;
  shadow?: Shadow;
}
