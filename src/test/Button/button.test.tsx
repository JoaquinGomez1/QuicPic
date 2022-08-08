import { Button } from "@components/index";
import { render, screen } from "@testing-library/react";

describe("Button renders text correctly", () => {
  it("Shows 'I am a button text'", () => {
    const displayText = "I am a button";

    render(<Button>{displayText}</Button>);

    expect(screen.getByText(displayText)).toBeInTheDocument();
  });
});
