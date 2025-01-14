import { render, screen } from "@testing-library/react";
import FavoriteButton from "./index";
import userEvent from "@testing-library/user-event";

describe("Test for FavoriteButton Component", () => {
  const onCheckedMock = vi.fn((checked) => !checked);
  const user = userEvent.setup();

  it("should render a button with a <button> tag and should called onChecked", async () => {
    render(<FavoriteButton onChecked={onCheckedMock} checked={false} />);
    const buttonElement = screen.getByRole("button");

    await user.click(buttonElement);

    expect(buttonElement).toBeInTheDocument();

    expect(onCheckedMock).toHaveBeenCalledTimes(1);
  });

  it("should render a button with a <button> tag and should has an icon as a children", () => {
    render(<FavoriteButton onChecked={onCheckedMock} checked={false} />);

    const buttonElement = screen.getByRole("button");
    const iconElement = screen.getByRole("img");

    expect(buttonElement.childElementCount).toBe(1);
    expect(iconElement).toBeInTheDocument();
  });

  it("should render a button with a <button> tag and should has different styles", () => {
    render(<FavoriteButton onChecked={onCheckedMock} checked={false} />);

    const buttonElement = screen.getByRole("button");

    expect(buttonElement.style.backgroundColor).toBe("transparent");
    expect(buttonElement.style.width).toBe("30px");
    expect(buttonElement.style.height).toBe("30px");
    expect(buttonElement.style.borderRadius).toBe("0px");
    expect(buttonElement.style.padding).toBe("0px");
  });
});
