import React from "react";
import { StyledAvatar } from "./styles";
import { BaseProps } from "../commonInterfaces/base";
import { theme } from "../themes";
export interface AvatarProps extends BaseProps {
  size: "small" | "medium" | "big";
  pictureSrc: string;
}

export const Avatar: React.FC<AvatarProps> = (props) => {
  return <StyledAvatar {...props}></StyledAvatar>;
};

Avatar.defaultProps = {
  pictureSrc: "https://cde.laprensa.e3.pe/ima/0/0/2/1/2/212026.jpg",
  size: "small",
  theme: theme,
};
