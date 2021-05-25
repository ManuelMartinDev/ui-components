import React from "react";
import { Story, Meta } from "@storybook/react";
import { InfoCard, InfoCardProps } from "./InfoCard";
import {
  shapedComponentsArgs,
  shapedComponentsArgsTypes,
} from "../sharedArgs/shapedComponents";
export default {
  title: "Components/Cards/Info",
  component: InfoCard,
  argTypes: {
    ...shapedComponentsArgsTypes,
  },
  args: {
    ...shapedComponentsArgs,
  },
} as Meta;

const Template: Story<InfoCardProps> = (args) => <InfoCard {...args} />;
export const Underline = Template.bind({});
export const Rounded = Template.bind({});
export const noLabel = Template.bind({});

Underline.args = {};
