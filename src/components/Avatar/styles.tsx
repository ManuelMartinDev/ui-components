import styled, { css } from "styled-components";
import { AvatarProps } from "./Avatar";
import { baseStyles } from "../globalStyles/base";
const sizes = {
  small: "60px",
  medium: "90px",
  big: "120px",
};
export const StyledAvatar = styled.span<AvatarProps>`
  display: block;
  border-radius: 50%;

  ${({ size }) => css`
    width: ${sizes[size]};
    height: ${sizes[size]};
  `}
  overflow: hidden;
  background: url(${({ pictureSrc }) => pictureSrc});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${baseStyles}
`;
