import { shapedComponentsProps } from "../commonInterfaces/shapedComponents";

export function simpleRadius({ theme, borderShape }: shapedComponentsProps) {
  return borderShape && theme.borders[borderShape];
}

export function complexRadius(
  side: "topRight" | "topLeft" | "bottomRight" | "bottomLeft"
) {
  return function ({
    borderShape,
    complexBorderShape,
    theme,
  }: shapedComponentsProps) {
    return (
      (complexBorderShape &&
        complexBorderShape[side] &&
        theme.borders[complexBorderShape[side]!]) ??
      (borderShape && theme.borders[borderShape])
    );
  };
}

export function bgTypeSelector({
  bgType,
  customBg,
  theme,
}: shapedComponentsProps) {
  return bgType && bgType !== "custom" ? theme.colors[bgType] : customBg;
}

export function setDarkOnUserPrefrence({
  darkOnUserPreference,
  theme,
}: shapedComponentsProps) {
  return darkOnUserPreference && theme.colors.dark;
}

export function setShadow({ theme, shadow }: shapedComponentsProps) {
  return shadow && theme.shadows[shadow];
}
