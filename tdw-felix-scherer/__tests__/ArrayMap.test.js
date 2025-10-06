import React from "react";
import { render } from "@testing-library/react";
import ArrayMap from "@/app/array-map/page";

describe("ArrayMap Component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<ArrayMap />);
    expect(asFragment()).toMatchSnapshot();
  });
});
