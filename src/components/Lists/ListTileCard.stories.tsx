import React from "react";
import { Story, Meta } from "@storybook/react";
import { ListTileCard } from "./ListTileCard";

export default {
  title: "Components/Lists/ListTileCard",
  component: ListTileCard,
} as Meta;

const Template: Story = (args) => <ListTileCard {...args} />;
export const default1 = Template.bind({});
export const default2 = Template.bind({});
