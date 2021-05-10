import React from "react";
import { Story, Meta } from "@storybook/react";
import { RadioInput, RadioInputProps } from "./RadioInput";

export default {
  title: "Components/Forms/Inputs/Radio",
  component: RadioInput,
} as Meta;

const Template: Story<RadioInputProps> = (args) => <RadioInput {...args} />;
export const Underline = Template.bind({});
export const Rounded = Template.bind({});
export const noLabel = Template.bind({});
