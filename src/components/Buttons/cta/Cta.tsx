import React from "react";
import { Button } from "./styles";
import { ThemeProvider } from "styled-components";
import { theme } from "../themes";
import { shapedComponentsProps } from "../../commonInterfaces/shapedComponents";

export interface CtaProps
  extends shapedComponentsProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  hoverBg?: string;
  hoverBgTransition?: string;
}

export const Cta: React.FC<CtaProps> = (props: CtaProps) => {
  const { label, theme } = props;
  return (
    <ThemeProvider theme={theme}>
      <Button {...props}>{label}</Button>
    </ThemeProvider>
  );
};

Cta.defaultProps = {
  theme: theme,
  responsiveStyles: {
    mobile: {
      border: "2px solid red",
    },
    tablet: {
      border: "2px solid blue",
    },
    desktop: {
      border: "2px solid yellow",
    },
  },
};
