import React, { Fragment, ReactElement } from "react";
import { TextInput, TextInputProps } from "../Text/TextInput";
import { Cta, CtaProps } from "../../../Buttons/cta/Cta";
import { Wrapper } from "./styles";
export interface CtaTextProps {
  children: [ReactElement<CtaProps>, ReactElement<TextInputProps>];
}

export const CtaText: React.FC<CtaTextProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export const CtaTextSample: React.FC = () => {
  return (
    <Fragment>
      <CtaText>
        <TextInput
          placeholder="example@gmail.com"
          additionalStyles={{
            fontSize: "1em",
            paddingLeft: "5px",
          }}
        />
        <Cta
          label="SUBMIT"
          bgType="primary"
          additionalStyles={{
            fontWeight: "bold",
          }}
        />
      </CtaText>
    </Fragment>
  );
};
