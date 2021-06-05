import React from "react";
import { Story, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "./Avatar";
export default {
  title: "Components/User/Avatar",
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;
export const Big = Template.bind({});
export const Medium = Template.bind({});
export const Small = Template.bind({});

Big.args = {
  size: "big",
};
Medium.args = {
  size: "medium",
};
Small.args = {
  size: "small",
};
