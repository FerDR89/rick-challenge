import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./index";
import Text from "../text";

describe("Test for Button Component", () => {
  const onClickMock = vi.fn();
  const textMock = "Soy el botón";
  const user = userEvent.setup();

  it("should render a button with a <button> tag and check if it has a child", () => {
    render(
      <Button>
        <Text tag="text-bold" text={textMock} />
      </Button>
    );

    const buttonElement = screen.getByRole("button");

    const childrenElement = buttonElement.children[0];

    expect(buttonElement).toBeInTheDocument();

    expect(buttonElement.childElementCount).toEqual(1);

    expect(childrenElement).toHaveTextContent(textMock);
  });

  it("should render a button with a <button> tag and check if it has been clicked", async () => {
    render(
      <Button onClick={onClickMock}>
        <Text tag="text-body" text={textMock} />
      </Button>
    );

    const buttonElement = screen.getByRole("button");

    await user.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("should render a button with a <button> tag and check if it is disabled", async () => {
    onClickMock.mockClear();

    render(
      <Button onClick={onClickMock} disabled>
        <Text tag="text-body" text={textMock} />
      </Button>
    );

    const buttonElement = screen.getByRole("button");

    await user.click(buttonElement);

    expect(buttonElement).toBeDisabled();
    expect(onClickMock).not.toHaveBeenCalled();
  });

  it("should render a button with a <button> tag and check if it has a specific class and style", async () => {
    render(
      <Button onClick={onClickMock} style={{ backgroundColor: "red" }}>
        <Text tag="text-body" text={textMock} />
      </Button>
    );

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toHaveClass("button");
    expect(buttonElement.style.backgroundColor).toBe("red");
  });
});
