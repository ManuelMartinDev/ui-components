import styled from "styled-components";
import { InfoCardProps } from "./InfoCard";

export const Card = styled.div`
  width: 400px;
  height: 378px;
  border: 2px solid red;
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const CardTitle = styled.h2<InfoCardProps>`
  margin: 0;
  margin-top: 15px;
  text-transform: ${({ titleUppercase }) => titleUppercase && titleUppercase};
`;

export const CardDescription = styled.p`
  text-align: center;
  margin: 0;
  margin-top: 15px;
`;
