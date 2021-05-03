export const shapedComponentsArgsTypes = {
  bgType: {
    options: ["primary", "warning", "danger", "dark", "custom"],
    control: { type: "select" },
    description: "select one of the theme options",
    table: {
      defaultValue: { summary: "primary" },
    },
  },
  borderShape: {
    options: ["sharp", "rounded", "extraRounded"],
    control: "select",
    description: "set the type of border radius",
  },
  customBg: {
    control: "color",
    description:
      "a custom color for the background, **bgType must be set to custom for this to work**",
  },
  hoverBg: {
    control: "color",
    description: "a custom bg color for when user put the mouse over",
  },
  hoverBgTransition: {
    control: "text",
    description: "the transition of the bg change on hover",
  },
  darkOnUserPreference: {
    control: { type: "boolean" },
    description:
      "when set to true the bgType will be set to dark if the user has dark prefence enabled on OS ",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  complexBorderShape: {
    control: { type: "object" },
    description:
      "object to define a border shape for each corner ** corners that are not set here will inherit the global border setting of the component ** ",
  },
  shadow: {
    options: ["small", "medium", "normal", "big", "extra", "inner"],
    control: "select",
    description: "set the type of box shadow",
  },
};

export const shapedComponentsArgs = {
  darkOnUserPreference: false,
  complexBorderShape: {
    topRight: "",
    topLeft: "",
    bottomRight: "",
    bottomLeft: "",
  },
  customStyles: {
    mobile: {},
    tablet: {},
    desktop: {},
  },
};
