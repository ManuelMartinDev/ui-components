import React from "react";
import { Story, Meta } from "@storybook/react";
import { ListTile, ListTileProps } from "./ListTile";

export default {
  title: "Components/Lists/ListTile",
  component: ListTile,
} as Meta;

const Template: Story<ListTileProps> = (args) => <ListTile {...args} />;
export const default1 = Template.bind({});
export const default2 = Template.bind({});
