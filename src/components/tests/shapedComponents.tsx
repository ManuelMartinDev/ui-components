import React from "react";
import { render, RenderResult } from "@testing-library/react";
import { theme } from "../themes";
import { shapedComponentsProps } from "../commonInterfaces/shapedComponents";

export function testShapedComponents(
  Component: React.FC<shapedComponentsProps>
) {
  let renderedComponent: RenderResult;
  beforeEach(() => {
    renderedComponent = render(<Component theme={theme} bgType="primary" />);
  });

  test("should have a have the background given in props", () => {
    const button = renderedComponent.getByText("Buy now");
    expect(button).toHaveStyle(`background-color:${theme.colors.primary}`);
  });
}
