import { render, screen } from "@testing-library/react";
import UntitledCountryIcon from "../UntitledCountryIcon";

test("renders correctly with a valid country code", () => {
  render(<UntitledCountryIcon country="US" altText="United States icon" />);
  const icon = screen.getByRole("img", { name: /United States icon/i });
  expect(icon).toBeInTheDocument();
});

test("renders correctly with another valid country code", () => {
  render(<UntitledCountryIcon country="BR" altText="Brazil icon" />);
  const icon = screen.getByRole("img", { name: /Brazil icon/i });
  expect(icon).toBeInTheDocument();
});
