import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("Initial Conditions", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });
  expect(checkbox).not.toBeChecked();

  const ConfirmButton = screen.getByRole("buton", { name: "Confirm Order" });
  expect(ConfirmButton).toBeDisabled();
});

test("checkbox disables button on first click and enables second click", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });
  const ConfirmButton = screen.getByRole("buton", { name: "Confirm Order" });

  fireEvent.click(checkbox);
  expect(ConfirmButton).toBeEnabled();

  fireEvent.click(checkbox);
  expect(ConfirmButton).toBeDisabled();
});
