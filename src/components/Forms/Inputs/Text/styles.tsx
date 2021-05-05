import styled from "styled-components";
import { shapedComponentStyles } from "../../../globalStyles/shapedComponents";
import { TextInputProps } from "./TextInput";
export const Input = styled.input<TextInputProps>`
  ${shapedComponentStyles}
`;

export const Label = styled.label`
  display: block;
`;
