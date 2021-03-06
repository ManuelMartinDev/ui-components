import React, { Fragment } from "react";
import { Input, Label } from "./styles";
import { theme } from "../../../themes";
import { shapedComponentsProps } from "../../../commonInterfaces/shapedComponents";
export interface TextInputProps
  extends shapedComponentsProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  labelPosition?: "top" | "side";
  focusColor?: string;
}
export const TextInput: React.FC<TextInputProps> = (props) => {
  return (
    <Fragment>
      {props.label && (
        <Label
          className="text-input__label"
          labelPosition={props.labelPosition}
        >
          {props.label}
        </Label>
      )}

      <Input className="text-input" {...props}></Input>
    </Fragment>
  );
};

TextInput.defaultProps = {
  theme: theme,
  labelPosition: "top",
};
