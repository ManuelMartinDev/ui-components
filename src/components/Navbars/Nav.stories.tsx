import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  shapedComponentsArgs,
  shapedComponentsArgsTypes,
} from "../sharedArgs/shapedComponents";
import { baseArgsTypes, baseArgs } from "../sharedArgs/base";
import { Nav, NavProps } from "./Nav";

export default {
  title: "Components/Navbars/NAV",
  component: Nav,
  argTypes: {
    ...baseArgsTypes,
    ...shapedComponentsArgsTypes,
  },
  args: {
    ...baseArgs,
    ...shapedComponentsArgs,
  },
} as Meta;

const Template: Story<NavProps> = (args) => <Nav {...args} />;
export const test1 = Template.bind({});

test1.args = {
  bgType: "primary",
};
