import React from "react";
import { Story, Meta } from "@storybook/react";
import { SelectProps } from "./Select";
import { SelectSample } from "./SelectSample";

export default {
  title: "Components/Forms/Inputs/Select",
  component: SelectSample,
} as Meta;

const Template: Story<SelectProps> = (args) => <SelectSample {...args} />;
export const Underline = Template.bind({});
export const Rounded = Template.bind({});
export const noLabel = Template.bind({});

Underline.args = {
  itemsList: [
    {
      id: "1",
      display: "Elemento 2",
    },
  ],
};
