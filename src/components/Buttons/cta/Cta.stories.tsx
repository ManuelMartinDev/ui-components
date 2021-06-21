import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  shapedComponentsArgs,
  shapedComponentsArgsTypes,
} from "../../sharedArgs/shapedComponents";
import { baseArgsTypes, baseArgs } from "../../sharedArgs/base";
import { Cta, CtaProps } from "./Cta";

export default {
  title: "Components/Buttons/CTA",
  component: Cta,
  argTypes: {
    label: {
      control: {
        type: "text",
      },
      description: "text that will appear on the button",
    },
    ...baseArgsTypes,
    ...shapedComponentsArgsTypes,
  },
  args: {
    label: "Inicio",
    ...baseArgs,
    ...shapedComponentsArgs,
  },
} as Meta;

const Template: Story<CtaProps> = (args) => <Cta {...args} />;
export const Primary = Template.bind({});
export const Danger = Template.bind({});
export const Warning = Template.bind({});
export const onlyMobile = Template.bind({});
Primary.args = {
  bgType: "primary",
};
Warning.args = {
  bgType: "warning",
};
Danger.args = {
  bgType: "danger",
};
onlyMobile.args = {
  bgType: "primary",
  responsiveStyles: {
    mobile: {
      border: "2px solid red",
    },
    tablet: {},
    desktop: {},
  },
};
