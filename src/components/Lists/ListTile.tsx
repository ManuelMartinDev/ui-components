import React from "react";
import { FlexContainer } from "../Layout/FlexContainer";
import { ContentBlock, DefaultTitle, ImageContainer } from "./styles";
import Icon from "../../assets/dialogflow.svg";
import { BaseProps } from "../commonInterfaces/base";
export interface ListTileProps extends BaseProps {
  title: React.ReactChild;
  description: React.ReactChild;
  trail?: React.ReactChild;
  after?: React.ReactChild;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
}
export const ListTile: React.FC<ListTileProps> = (props) => {
  return (
    <FlexContainer
      direction={props.direction}
      additionalStyles={{
        ...props.additionalStyles,
      }}
    >
      {props.trail && <ImageContainer>{props.trail}</ImageContainer>}

      <ContentBlock>
        {props.title}
        {props.description}
      </ContentBlock>

      {props.after && (
        <ImageContainer style={{ marginRight: 0, marginLeft: "15px" }}>
          {props.after}
        </ImageContainer>
      )}
    </FlexContainer>
  );
};

ListTile.defaultProps = {
  title: <DefaultTitle>Titulo</DefaultTitle>,
  description: (
    <p style={{ margin: 0, padding: 0 }}>
      Expora la web con el navegador Firefox para la realidad virtual
    </p>
  ),
  trail: (
    <img
      style={{
        width: "40px",
        height: "40px",

        margin: "0",
      }}
      alt="googleicon"
      src={Icon}
    ></img>
  ),
};
