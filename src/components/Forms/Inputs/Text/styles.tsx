import styled from "styled-components";
import { shapedComponentStyles } from "../../../globalStyles/shapedComponents";
import { baseStyles } from "../../../globalStyles/base";
import { TextInputProps } from "./TextInput";

export const Input = styled.input<TextInputProps>`
  ${shapedComponentStyles}
  ${baseStyles}
  outline:'none'
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;
