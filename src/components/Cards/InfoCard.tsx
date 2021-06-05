import React from "react";
import { Card, CardTitle, CardDescription } from "./styles";
import { shapedComponentsProps } from "../commonInterfaces/shapedComponents";
import { theme } from "../themes";
export interface InfoCardProps extends shapedComponentsProps {
  HeadComponent: React.FC | React.ComponentClass;
  title: string;
  description: string;
  titleUppercase?: "uppercase" | "capitalize" | "none";
}
export const InfoCard: React.FC<InfoCardProps> = (props) => {
  const { HeadComponent, title, description } = props;
  return (
    <Card {...props}>
      <HeadComponent />
      <CardTitle {...props}>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
};

InfoCard.defaultProps = {
  title: "card title",
  description:
    "lorem fsofn sfoinsfpinsf sofinsf sg sgs fsfousbgusbg sgousbgoubs gsgoubsg",
  titleUppercase: "capitalize",
  theme: theme,
  shadow: "medium",
};
