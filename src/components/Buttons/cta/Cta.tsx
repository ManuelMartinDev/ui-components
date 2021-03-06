import React from "react";
import { Button } from "./styles";
import { ThemeProvider } from "styled-components";
import { theme } from "../themes";
import { shapedComponentsProps } from "../../commonInterfaces/shapedComponents";

export interface CtaProps
  extends shapedComponentsProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  hoverBg?: string;
  hoverBgTransition?: string;
}

export const Cta: React.FC<CtaProps> = (props: CtaProps) => {
  const { label, theme } = props;
  return (
    <ThemeProvider theme={theme}>
      <Button className="cta" {...props}>
        {label}
      </Button>
    </ThemeProvider>
  );
};

Cta.defaultProps = {
  theme: theme,
  responsiveStyles: {},
} as Partial<CtaProps>;
