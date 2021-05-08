import React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Cta } from "./Cta";
let component: RenderResult;
beforeEach(() => {
  component = render(<Cta label="Buy now" />);
});

describe("Cta", () => {
  it("should have provided label", () => {
    expect(component.getByText("Buy now")).toBeInTheDocument();
  });
});
