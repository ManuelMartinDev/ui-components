import React from "react";
import { StyledGridContainer } from "./styles";
import { shapedComponentsProps } from "../../commonInterfaces/shapedComponents";

type items = "start" | "end" | "center" | "stretch";
type content =
  | "start"
  | "end"
  | "center"
  | "stretch"
  | "space-around"
  | "space-between"
  | "space-evenly";
type flow = "row" | "column" | "row dense" | "column dense";
export interface GridContainerProps extends shapedComponentsProps {
  gridTemplatecColumns: string;
  gridTemplateRows: string;
  gridTemplateAreas: string;
  gridTemplate: string;
  columnGap: string;
  rowGap: string;
  gridColumnGap: string;
  gridRowGap: string;
  gap: string;
  justifyItems: items;
  alignItems: items;
  justifyContent: content;
  alignContent: content;
  placeItems: items | `${items} ${items}`;
  placeContent: content | `${content} ${content}`;
  gridAutoColumns: string;
  gridAutoRows: string;
  gridAutoFlow: flow;
  grid: string;
}
export const GridContainer: React.FC<GridContainerProps> = (props) => {
  return <StyledGridContainer {...props}>{props.children}</StyledGridContainer>;
};
