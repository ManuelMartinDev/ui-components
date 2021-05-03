import { Theme } from "../commonInterfaces/themes";

export const theme: Theme = {
  colors: {
    primary: "#54A0FF",
    warning: "#FECA57",
    danger: "#DA3633",
    dark: "#2B2B2B",
  },
  borders: {
    sharp: "0",
    rounded: "3px",
    extraRounded: "24px",
  },
  shadows: {
    small: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    normal: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    medium:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    big:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    extra:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  },
  breakpoints: {
    mobile: "575px",
    tablet: "768px",
    desktop: "1333px",
  },
};
