import { render, screen } from "@testing-library/react";
import Footer from "./index";

describe("Footer test", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("Should render <Text> and have Fernando de Row as text content Made with ❤️ by:", () => {
    const textElement = screen.getAllByRole("paragraph");
    expect(textElement[0]).toBeInTheDocument();
    expect(textElement[0]).toHaveTextContent("Made with ❤️ by:");
  });

  it("should render a link with an <a> tag and have Fernando de Row as text content", () => {
    const aElement = screen.queryByRole("link");
    expect(aElement).toHaveTextContent("Fernando de Row");
  });

  it("should render a link with an <a> tag and have href, target and rel attributes", () => {
    const aElement = screen.queryByRole("link");
    expect(aElement).toHaveAttribute(
      "href",
      expect.stringContaining("https://portfolio-418e2.web.app/")
    );
    expect(aElement).toHaveAttribute(
      "target",
      expect.stringContaining("_blank")
    );
    expect(aElement).toHaveAttribute(
      "rel",
      expect.stringContaining("noreferrer")
    );
  });
});
