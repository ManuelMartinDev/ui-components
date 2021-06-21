import React from "react";
import { FlexContainer } from "../Layout/FlexContainer";

import {
  PlanName,
  PlanDescription,
  Money,
  BenefitList,
  BenefitItem,
  FeatureList,
  FeatureItem,
} from "./styles";
const checkmark = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.9496 7.88896L3.03033 5.96969C2.73744 5.6768 2.26256 5.6768 1.96967 5.96969C1.67678 6.26258 1.67678 6.73746 1.96967 7.03035L4.46967 9.53035C4.78152 9.8422 5.29383 9.81896 5.57617 9.48016L10.5762 3.48016C10.8413 3.16195 10.7983 2.68903 10.4801 2.42385C10.1619 2.15868 9.68901 2.20167 9.42383 2.51988L4.9496 7.88896Z"
      fill="#2FA83E"
    />
  </svg>
);
const crossmask = (
  <svg width="12" height="12" className="svg-icon" viewBox="0 0 20 20">
    <path
      fill="red"
      d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
    ></path>
  </svg>
);
export interface PricingCardProps {
  planName: string;
  planDescription: string;
  moneyQuantity: string | number;
  planTime?: string;
  includesList: string[];
  featureList: [{ included: boolean; text: string }];
  cta: React.ReactChild;
  featureFirst: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = (props) => {
  return (
    <FlexContainer
      direction="column"
      additionalStyles={{
        maxWidth: "268px",
        borderRadius: "8px",
        paddingLeft: "30px",
        paddingRight: "30px",
        paddingTop: "25px",
        paddingBottom: "15px",
      }}
      shadow="medium"
    >
      <PlanName>{props.planName}</PlanName>
      <PlanDescription>{props.planDescription}</PlanDescription>
      <Money {...props}>{props.moneyQuantity}</Money>
      <BenefitList>
        {props.includesList &&
          props.includesList.map((include) => {
            return <BenefitItem>{include}</BenefitItem>;
          })}
      </BenefitList>
      <FlexContainer
        direction={props.featureFirst ? "column-reverse" : "column"}
        additionalStyles={{ marginTop: !props.featureFirst ? "20px" : "10px" }}
      >
        {props.cta}
        {props.featureList && (
          <FeatureList>
            {props.featureList.map((feature) => (
              <FeatureItem>
                {feature.included ? checkmark : crossmask}
                <span style={{ marginLeft: "10px" }}>{feature.text}</span>
              </FeatureItem>
            ))}
          </FeatureList>
        )}
      </FlexContainer>
    </FlexContainer>
  );
};

PricingCard.defaultProps = {
  featureFirst: false,
};
