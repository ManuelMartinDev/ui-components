export const baseArgsTypes = {
  additionalStyles: {
    control: "object",
    description: "a css styles object to add custom styles to the component",
  },
  responsiveStyles: {
    control: "object",
    description:
      "set specific styles to the component based on the theme breakpoints",
  },
};

export const baseArgs = {
  responsiveStyles: {
    mobile: {},
    tablet: {},
    desktop: {},
  },
};
