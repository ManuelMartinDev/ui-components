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
export const complete = Template.bind({});
export const noUserDropdown = Template.bind({});
const links = [
  <a
    style={{ listStyle: "none", textDecoration: "none", color: "white" }}
    href="www.google.com"
  >
    Google
  </a>,
  <a
    style={{ listStyle: "none", textDecoration: "none", color: "white" }}
    href="www.google.com"
  >
    Google
  </a>,
  <a
    style={{ listStyle: "none", textDecoration: "none", color: "white" }}
    href="www.google.com"
  >
    Google
  </a>,
  <a
    style={{ listStyle: "none", textDecoration: "none", color: "white" }}
    href="www.google.com"
  >
    Google
  </a>,
];

complete.args = {
  bgType: "custom",
  customBg: "#1F2937",
  navLinksHoverBg: "rgba(255,255,255,0.2)",
  userLinks: ["Your Profile", "Settings", "Sign out"],
  userPictureSrc:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  logo: (
    <img
      alt="dd"
      src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
      style={{ width: "143px", height: "42px", marginLeft: "10px" }}
    ></img>
  ),
  navLinks: links,
};

noUserDropdown.args = {
  bgType: "custom",
  customBg: "#1F2937",
  navLinksHoverBg: "rgba(255,255,255,0.2)",
  logo: (
    <img
      alt="dd"
      src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
      style={{ width: "143px", height: "42px", marginLeft: "10px" }}
    ></img>
  ),
  navLinks: links,
};
