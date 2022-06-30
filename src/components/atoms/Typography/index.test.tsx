import { render, screen } from "@testing-library/react";
import Typography from ".";

describe("Display text", () => {
  test("Should be heading", () => {
    render(<Typography children="This is heading 1" variant="h1" />);
    const headingElement = screen.getByText(/This is heading 1/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("Should be body", () => {
    render(<Typography children="This is body" variant="body1" />);
    const bodyElementl = screen.getByText(/This is body/i);
    expect(bodyElementl).toBeInTheDocument();
  });

  test("Should be subtitle", () => {
    render(<Typography children="This is subtitle" variant="subtitle1" />);
    const subtitleElement = screen.getByText(/This is subtitle/i);
    expect(subtitleElement).toBeInTheDocument();
  });

  test("Should be caption", () => {
    render(<Typography children="This is caption" variant="caption" />);
    const captionElement = screen.getByText(/This is caption/i);
    expect(captionElement).toBeInTheDocument();
  });
});