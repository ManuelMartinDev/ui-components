import React from "react";
import { Story, Meta } from "@storybook/react";
import { PricingCard, PricingCardProps } from "./PricingCard";
import { Cta } from "../Buttons/cta/Cta";
export default {
  title: "Components/Pricing/PricingCard",
  component: PricingCard,
  args: {
    planName: "Basic",
    planDescription: "Good to get you started",
    moneyQuantity: "10.00£",
    planTime: "/Month",
    includesList: ["1 project", "3 users"],
    featureList: [{ included: true, text: "Lifetime access to the sdk" }],
    cta: (
      <Cta
        label="Choose Advanced"
        bgType="custom"
        customBg="#2FA83E"
        additionalStyles={{ width: "204px", height: "38px" }}
        borderShape="extraRounded"
      />
    ),
  },
} as Meta;

const Template: Story<PricingCardProps> = (args) => <PricingCard {...args} />;
export const complete = Template.bind({});
export const noUserDropdown = Template.bind({});
