import React, { Fragment } from "react";
import { Input, Label } from "./styles";
import { theme } from "../../../themes";
import { shapedComponentsProps } from "../../../commonInterfaces/shapedComponents";
export interface TextInputProps extends shapedComponentsProps {
  label?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const TextInput: React.FC<TextInputProps> = (props) => {
  return (
    <Fragment>
      {props.label && <Label>{props.label}</Label>}
      <Input name="input" onChange={(e) => alert("changed")} {...props}></Input>
    </Fragment>
  );
};

TextInput.defaultProps = {
  theme: theme,
};
