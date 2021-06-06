import React from "react";
import { ListTile } from "./ListTile";
import { DefaultTitle } from "./styles";
import Icon from "../../assets/dialogflow.svg";
import { theme } from "../themes";
export const ListTileCard: React.FC = () => {
  return (
    <div
      style={{
        width: "260px",
        height: "116px",
        boxShadow: theme.shadows.medium,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ListTile
        additionalStyles={{ width: "90%" }}
        title={<DefaultTitle>Titulo</DefaultTitle>}
        after={
          <img
            style={{
              width: "40px",
              height: "40px",

              margin: "0",
            }}
            alt="googleicon"
            src={Icon}
          ></img>
        }
        description={
          <p style={{ margin: 0, padding: 0 }}>
            Expora la web con el navegador Firefox para la realidad virtual
          </p>
        }
      ></ListTile>
    </div>
  );
};
