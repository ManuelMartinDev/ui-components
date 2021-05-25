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
  HeadComponent: () => (
    <img
      style={{ width: "100%" }}
      src="https://cde.laprensa.e3.pe/ima/0/0/2/1/2/212026.jpg"
      alt="avatar"
    ></img>
  ),
  title: "card title",
  description:
    "lorem fsofn sfoinsfpinsf sofinsf sg sgs fsfousbgusbg sgousbgoubs gsgoubsg",
  titleUppercase: "capitalize",
  theme: theme,
};
