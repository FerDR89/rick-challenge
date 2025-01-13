import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SelectFilter from "./index";

describe("Test for Text Component", () => {
  const mockOptions = ["Option 1", "Option 2", "Option 3"];
  const mockOnSelectChange = vi.fn();
  const user = userEvent.setup();

  it("Should render <select> and check if it has 3 children/options and options values", async () => {
    render(
      <SelectFilter options={mockOptions} onSelectChange={mockOnSelectChange} />
    );

    const selectElement = screen.getByRole("combobox");

    expect(selectElement.childElementCount).toEqual(mockOptions.length);

    mockOptions.forEach((option) => {
      expect(screen.getByText(option)).toHaveTextContent(option);
    });
  });

  it("Should render <select> and check if onSelectChange callback has been triggered", async () => {
    render(
      <SelectFilter options={mockOptions} onSelectChange={mockOnSelectChange} />
    );
    const selectElement = screen.getByRole("combobox");

    await user.selectOptions(selectElement, mockOptions[2]);

    expect(mockOnSelectChange).toHaveBeenCalledTimes(1);
    expect(mockOnSelectChange).toHaveBeenCalledWith(mockOptions[2]);
  });

  it("Should render <select> and check if option 2 has been selected", async () => {
    render(
      <SelectFilter options={mockOptions} onSelectChange={mockOnSelectChange} />
    );
    const selectElement = screen.getByRole("combobox");

    await user.selectOptions(selectElement, mockOptions[1]);

    const optionElements: HTMLOptionElement[] = screen.getAllByRole("option");

    expect(optionElements[0].selected).toBeFalsy();
    expect(optionElements[1].selected).toBeTruthy();
    expect(optionElements[2].selected).toBeFalsy();
  });

  it("Should render <select> and check if value property has been set", async () => {
    render(
      <SelectFilter
        options={mockOptions}
        onSelectChange={mockOnSelectChange}
        value={mockOptions[0]}
      />
    );
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toHaveValue(mockOptions[0]);
  });

  it("Should render <select>, its options and check if it has the selectFilter__container and selectFilter__option classes", async () => {
    render(
      <SelectFilter options={mockOptions} onSelectChange={mockOnSelectChange} />
    );
    const selectElement = screen.getByRole("combobox");
    const optionElements: HTMLOptionElement[] = screen.getAllByRole("option");

    expect(selectElement).toHaveClass("selectFilter__container");

    optionElements.forEach((option) => {
      expect(option).toHaveClass("selectFilter__option");
    });
  });
});
