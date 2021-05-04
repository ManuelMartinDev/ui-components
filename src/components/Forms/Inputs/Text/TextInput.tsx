import React from "react";
import { Input } from "./styles";
import { theme } from "../../../themes";
import { shapedComponentsProps } from "../../../commonInterfaces/shapedComponents";
export interface TextInputProps extends shapedComponentsProps {}
export const TextInput: React.FC<TextInputProps> = (props) => {
  return <Input {...props}></Input>;
};

TextInput.defaultProps = {
  theme: theme,
};
