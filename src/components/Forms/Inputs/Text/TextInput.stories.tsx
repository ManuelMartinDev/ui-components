import React from "react";
import { Story, Meta } from "@storybook/react";
import { TextInput, TextInputProps } from "./TextInput";

import {
  shapedComponentsArgs,
  shapedComponentsArgsTypes,
} from "../../../sharedArgs/shapedComponents";
import { baseArgs, baseArgsTypes } from "../../../sharedArgs/base";
export default {
  title: "Components/Forms/Inputs/Text",
  component: TextInput,
  argTypes: {
    label: {},
    placeholder: {},
    labelPosition: {
      options: ["top", "side"],
      control: "select",
      description: "set the label position",
    },
    ...baseArgsTypes,
    ...shapedComponentsArgsTypes,
  },
  args: {
    ...baseArgs,
    ...shapedComponentsArgs,
  },
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;
export const Underline = Template.bind({});
export const Rounded = Template.bind({});
export const noLabel = Template.bind({});

Underline.args = {
  label: "Username",
  additionalStyles: {
    border: "none",
    borderBottom: "2px solid black",
  },
  placeholder: "Introduce your username",
};

Rounded.args = {
  label: "username",
  borderShape: "rounded",
  bgType: "custom",
  customBg: "#EDF1F4",
  additionalStyles: {
    border: "1px solid rgba(0,0,0,0.5)",
    height: "25px",
    width: "180px",
    fontSize: "1em",
  },
};

noLabel.args = {
  label: "",
};
