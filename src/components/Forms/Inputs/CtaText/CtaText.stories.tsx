import React from "react";
import { Story, Meta } from "@storybook/react";
import { CtaTextSample, CtaTextProps } from "./CtaText";

export default {
  title: "Components/Forms/Inputs/CtaText",
  component: CtaTextSample,
} as Meta;

const Template: Story<CtaTextProps> = (args) => <CtaTextSample {...args} />;
export const withPicture = Template.bind({});
export const withAvatar = Template.bind({});
export const noLabel = Template.bind({});
