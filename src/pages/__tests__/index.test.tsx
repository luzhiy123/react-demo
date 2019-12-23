import "jest";
import A from "../a/a";
import React from "react";
import renderer, { ReactTestInstance, ReactTestRenderer } from "react-test-renderer";

describe("Page: A", () => {
  it("Render correctly", () => {
    const wrapper: ReactTestRenderer = renderer.create(<A />);
    expect(wrapper.root.children.length).toBe(1);
    const outerLayer = wrapper.root.children[0] as ReactTestInstance;
    expect(outerLayer.type).toBe("div");
    expect(outerLayer.children.length).toBe(2);
  });
});
