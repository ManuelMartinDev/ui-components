import React from "react";
import { render } from "@testing-library/react";
import { TextInput } from "./TextInput";

describe("TextInput", () => {
  it("should have label on top if is given in props", () => {
    const component = render(
      <TextInput label="username" labelPosition="top" />
    );
    const label = component.container.querySelector("label");
    expect(label).toHaveStyle("display:block");
  });
  it("should have label in a side if is given in props", () => {
    const component = render(
      <TextInput label="username" labelPosition="side" />
    );
    const label = component.container.querySelector("label");
    expect(label).toHaveStyle("display:inline-block");
  });
  it("has the placeholder given in props", () => {
    const component = render(
      <TextInput placeholder="write" label="username" labelPosition="side" />
    );
    const input = component.container.querySelector("input");
    const placeholder = input?.getAttribute("placeholder");
    expect(placeholder).toBe("write");
  });
});
