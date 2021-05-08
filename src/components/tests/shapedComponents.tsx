import React from "react";
import { render } from "@testing-library/react";
import { theme } from "../themes";
import { shapedComponentsProps } from "../commonInterfaces/shapedComponents";

export function testShapedComponents(
  Component: React.FC<shapedComponentsProps>
) {
  let renderedComponent = render(<Component />);

  it("should have a have the background given in props", () => {
    const button = renderedComponent.getByText("Buy now");
    expect(button).toHaveStyle(`background-color:${theme.colors.primary}`);
  });
  it("should have the additional styles given in props", () => {
    const button = renderedComponent.getByText("Buy now");

    expect(button).toHaveStyle("border:2px solid red");
  });
  it("should have the border-radius given in props", () => {
    const button = renderedComponent.getByText("Buy now");

    expect(button).toHaveStyle(`border-radius:${theme.borders.rounded}`);
  });
  it("should have shadow given in props", () => {
    const button = renderedComponent.getByText("Buy now");

    expect(button).toHaveStyle(`box-shadow:${theme.shadows.big}`);
  });
}
