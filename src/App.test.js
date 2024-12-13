import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  const editText = screen.getByText("Edit");

  const counterValue = screen.getByText("0");
  expect(counterValue).toBeInTheDocument();

  const btn = screen.getByTestId("btn");

  fireEvent.click(btn);

  expect(screen.getByText("2")).toBeInTheDocument();

  expect(editText).toBeInTheDocument();
});
