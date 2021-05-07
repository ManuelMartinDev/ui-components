import React from "react";
import { prettyDOM, render, RenderResult } from "@testing-library/react";
import { Cta } from "./Cta";
import userEvent from "@testing-library/user-event";
import { theme } from "../../themes";
import { testShapedComponents } from "../../tests/shapedComponents";
let component: RenderResult;
beforeEach(() => {
  component = render(
    <Cta
      additionalStyles={{ border: "2px solid red" }}
      label="Buy now"
      theme={theme}
      bgType="primary"
      hoverBg="red"
    />
  );
});

describe("Cta", () => {
  it("should have provided label", () => {
    expect(component.getByText("Buy now")).toBeInTheDocument();
  });

  testShapedComponents(Cta);
});
