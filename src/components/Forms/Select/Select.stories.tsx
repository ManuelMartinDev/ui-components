import React from "react";
import { Story, Meta } from "@storybook/react";
import { SelectDropdown, SelectProps } from "./Select";

export default {
  title: "Components/Forms/Inputs/Select",
  component: SelectDropdown,
} as Meta;

const Template: Story<SelectProps> = (args) => <SelectDropdown {...args} />;
export const Underline = Template.bind({});
export const Rounded = Template.bind({});
export const noLabel = Template.bind({});
