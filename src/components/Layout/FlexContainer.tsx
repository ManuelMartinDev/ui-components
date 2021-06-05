import React from "react";
import { FlexboxContainer } from "./styles";
import { shapedComponentsProps } from "../commonInterfaces/shapedComponents";
export interface FlexContainerProps extends shapedComponentsProps {
  direction: "row" | "row-reverse" | "column" | "column-reverse";
  wrap: "nowrap" | "wrap" | "wrap-reverse";
  justifyContent:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "start"
    | "end"
    | "left"
    | "right";
  alignItems:
    | "stretch"
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "first-baseline"
    | "last-baseline"
    | "start"
    | "end"
    | "self-start"
    | "self-end";
  alignContent:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch"
    | "start"
    | "end"
    | "baseline"
    | "first-baseline"
    | "last-baseline";
}
export const FlexContainer: React.FC<FlexContainerProps> = (props) => {
  return <FlexboxContainer {...props}>{props.children}</FlexboxContainer>;
};
