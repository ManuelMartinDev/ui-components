import React from "react";
import { Story, Meta } from "@storybook/react";
import { TextInput, TextInputProps } from "./TextInput";
import {
  shapedComponentsArgs,
  shapedComponentsArgsTypes,
} from "../../../sharedArgs/shapedComponents";
export default {
  title: "Components/Forms/Inputs/Text",
  component: TextInput,
  argTypes: {
    ...shapedComponentsArgsTypes,
  },
  args: {
    ...shapedComponentsArgs,
  },
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;
export const Underline = Template.bind({});
export const Danger = Template.bind({});
export const Warning = Template.bind({});

Underline.args = {
  label: "Username",
};
