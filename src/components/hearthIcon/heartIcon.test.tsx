import { render, screen } from "@testing-library/react";
import HearthIcon from "./index";

describe("Test for HearthIcon Component", () => {
  it("should render a icon with a <svg> tag and should render the outlined heart with checked is false", () => {
    render(<HearthIcon checked={false} />);
    const iconElement = screen.getByRole("img");
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute("fill", "none");
    expect(iconElement).toHaveAttribute("color", "white");
  });

  it("should render a icon with a <svg> tag and should render the filled heart with checked is true", () => {
    render(<HearthIcon checked={true} />);
    const iconElement = screen.getByRole("img");
    expect(iconElement).toHaveAttribute("fill", "currentColor");
    expect(iconElement).toHaveAttribute("color", "#9D0191");
  });

  it("should render a icon with a <svg> tag and should applied default size", () => {
    render(<HearthIcon checked={true} />);
    const iconElement = screen.getByRole("img");
    expect(iconElement).toHaveAttribute("width", "30px");
    expect(iconElement).toHaveAttribute("height", "30px");
  });
  it("should render a icon with a <svg> tag and should have the color and size passed by props apllied it", () => {
    const filledColor = "pink";
    const size = "50px";

    render(<HearthIcon checked={true} filledColor={filledColor} size={size} />);
    const iconElement = screen.getByRole("img");
    expect(iconElement).toHaveAttribute("color", filledColor);
    expect(iconElement).toHaveAttribute("width", size);
    expect(iconElement).toHaveAttribute("height", size);
  });
});
