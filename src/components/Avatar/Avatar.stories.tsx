import React from "react";
import { Story, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "./Avatar";
export default {
  title: "Components/User/Avatar",
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;
export const Underline = Template.bind({});
export const Rounded = Template.bind({});
export const noLabel = Template.bind({});

Underline.args = {};
