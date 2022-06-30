import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react"
import { BrowserRouter } from "react-router-dom";
import EnterpreneurshipPage from ".";

const MockEnt = () => {
  return (
    <BrowserRouter>
      <EnterpreneurshipPage />
    </BrowserRouter>
  );
};

test("should render the entrepreneurship component", () => {
  render(<MockEnt />);
});