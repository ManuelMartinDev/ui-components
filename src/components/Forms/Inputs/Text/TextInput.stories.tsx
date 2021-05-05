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
export const Danger = Template.bind({});
export const Warning = Template.bind({});

Underline.args = {
  label: "Username",
  additionalStyles: {
    border: "none",
    borderBottom: "2px solid black",
  },
};
