import { render, screen } from "@testing-library/react";
import MyComponent from "./MyComponent";

test("renders the component with Storybook env variable", () => {
  render(<MyComponent />);
  const componentText = screen.getByText(/i'm a test variable/);
  expect(componentText).toBeInTheDocument();
});

test("renders the component with React variable", () => {
  render(<MyComponent />);
  const componentText = screen.getByText(/super duper test variable/);
  expect(componentText).toBeInTheDocument();
});
