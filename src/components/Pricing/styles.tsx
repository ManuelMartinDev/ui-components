import styled from "styled-components";
import { PricingCardProps } from "./PricingCard";
export const PlanName = styled.p`
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.5);
`;

export const PlanDescription = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 0;
  margin-top: 7px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.9rem;
`;

export const Money = styled.span<PricingCardProps>`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  margin-top: 13px;
  font-weight: bold;
  position: relative;
  &:after {
    content: "${({ planTime }) => planTime && planTime}";
    color: rgba(0, 0, 0, 0.5);
    font-size: 0.8rem;
    position: absolute;
    top: 0;
    font-weight: lighter;
  }
`;

export const BenefitList = styled.ul`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 20px;
`;

export const BenefitItem = styled.li`
  margin-bottom: 8px;
`;

export const FeatureList = styled.ul`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 20px;
`;

export const FeatureItem = styled.li`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
