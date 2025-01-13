import { render, screen } from "@testing-library/react";
import Text from "./index";

describe("Test for Text Component", () => {
  it("should render a title with a <h1> tag and have Title as text content", () => {
    render(<Text tag="title" text="Title" />);
    const textElement = screen.getByRole("heading", { level: 1 });
    expect(textElement).toHaveTextContent("Title");
  });

  it("should render a title with a <h1> tag and have a class called text_title", () => {
    render(<Text tag="title" text="Title" />);
    const textElement = screen.getByRole("heading", { level: 1 });
    expect(textElement).toHaveClass("text_title");
  });

  it("should render a title with a <h1> tag and have color set to red via style property", () => {
    render(<Text tag="title" text="Title" style={{ color: "red" }} />);
    const textElement = screen.getByRole("heading", { level: 1 });
    expect(textElement.style.color).toBe("red");
  });

  it("should render a subtitle with a <h2> tag and have Subtitle as text content", () => {
    render(<Text tag="subtitle" text="Subtitle" />);
    const textElement = screen.getByRole("heading", { level: 2 });
    expect(textElement).toHaveTextContent("Subtitle");
  });

  it("should render a subtitle with a <h2> tag and have a class called text_subtitle", () => {
    render(<Text tag="subtitle" text="Subtitle" />);
    const textElement = screen.getByRole("heading", { level: 2 });
    expect(textElement).toHaveClass("text_subtitle");
  });

  it("should render a text bold with a <p> and have text-bold as text content", () => {
    render(<Text tag="text-bold" text="text-bold" />);
    const textElement = screen.getByRole("paragraph");
    expect(textElement).toHaveTextContent("text-bold");
  });

  it("should render a text bold with a <p> and have a class called text-bold", () => {
    render(<Text tag="text-bold" text="text-bold" />);
    const textElement = screen.getByRole("paragraph");
    expect(textElement).toHaveClass("text_bold");
  });

  it("should render a text with a <p> and have text-body as text content", () => {
    render(<Text tag="text-body" text="text-body" />);
    const textElement = screen.getByRole("paragraph");
    expect(textElement).toHaveTextContent("text-body");
  });

  it("should render a text with a <p> and have a class called text-body", () => {
    render(<Text tag="text-body" text="text-body" />);
    const textElement = screen.getByRole("paragraph");
    expect(textElement).toHaveClass("text_body");
  });
});
