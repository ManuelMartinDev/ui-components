import React from "react";
import { Story, Meta } from "@storybook/react";
import { InfoCard, InfoCardProps } from "./InfoCard";
import { Avatar } from "../Avatar/Avatar";
import {
  shapedComponentsArgs,
  shapedComponentsArgsTypes,
} from "../sharedArgs/shapedComponents";
export default {
  title: "Components/Cards/Info",
  component: InfoCard,
  argTypes: {
    title: {},
    description: {},
    titleUppercase: {
      options: ["uppercase", "capitalize", "none"],
      control: {
        type: "select",
      },
    },
    flexDirection: {
      options: ["column", "row"],
      control: {
        type: "select",
      },
    },
    ...shapedComponentsArgsTypes,
  },
  args: {
    ...shapedComponentsArgs,
  },
} as Meta;

const Template: Story<InfoCardProps> = (args) => <InfoCard {...args} />;
export const withPicture = Template.bind({});
export const withAvatar = Template.bind({});
export const noLabel = Template.bind({});

withPicture.args = {
  HeadComponent: () => (
    <img
      style={{ width: "100%" }}
      src="https://cde.laprensa.e3.pe/ima/0/0/2/1/2/212026.jpg"
      alt="avatar"
    ></img>
  ),
};

withAvatar.args = {
  HeadComponent: () => (
    <Avatar
      size="big"
      pictureSrc="https://cde.laprensa.e3.pe/ima/0/0/2/1/2/212026.jpg"
      additionalStyles={{ marginTop: "10px" }}
    ></Avatar>
  ),
};
