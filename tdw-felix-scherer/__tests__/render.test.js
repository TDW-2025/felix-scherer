// import dependencies
import React from "react";

// import react-testing methods
import { render, screen } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom";

import Home from "../src/app/page";

test("Checks if Hello World is rendered in homepage", async () => {
  render(<Home />);
  expect(screen.getByText("Hello World!")).toBeInTheDocument();
});
