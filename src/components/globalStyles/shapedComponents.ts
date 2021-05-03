import { css } from "styled-components";
import {
  simpleRadius,
  complexRadius,
  bgTypeSelector,
  setDarkOnUserPrefrence,
  setShadow,
} from "../utils/styling";

export const shapedComponentStyles = css`
  border-radius: ${simpleRadius};
  border-top-right-radius: ${complexRadius("topRight")};
  border-top-left-radius: ${complexRadius("topLeft")};
  border-bottom-right-radius: ${complexRadius("bottomRight")};
  border-bottom-left-radius: ${complexRadius("bottomLeft")};
  background-color: ${bgTypeSelector};
  box-shadow: ${setShadow};
  @media (prefers-color-scheme: dark) {
    background-color: ${setDarkOnUserPrefrence};
  }
`;
