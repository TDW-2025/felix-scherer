import React from "react";
import { render } from "@testing-library/react";
import Home from "@/app/page";

describe("Home Component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});