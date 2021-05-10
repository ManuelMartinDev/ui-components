import React from "react";
import { Input, Label } from "./styles";
import { BaseProps } from "../../../commonInterfaces/base";
export interface RadioInputProps extends BaseProps {}
export const RadioInput: React.FC<RadioInputProps> = () => {
  return (
    <Label>
      <Input name="radio" type="radio" />
    </Label>
  );
};
