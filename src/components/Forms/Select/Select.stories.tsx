import React from "react";
import { Story, Meta } from "@storybook/react";
import { SelectProps } from "./Select";
import { SelectSample } from "./SelectSample";

export default {
  title: "Components/Forms/Inputs/Select",
  component: SelectSample,
} as Meta;

const Template: Story<SelectProps> = (args) => <SelectSample {...args} />;
export const Default = Template.bind({});

Default.args = {
  itemsList: [
    {
      id: "1",
      display: "Elemento 2",
    },
  ],
};
