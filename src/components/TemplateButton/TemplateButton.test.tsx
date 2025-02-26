import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TemplateButton from "./TemplateButton";

describe("TemplateButton", () => {
    test("renders correctly with the provided text", () => {
        render(<TemplateButton text="Click here" />);
    
        // Checks if the button appears on the screen with the correct text
        expect(screen.getByText("Click here")).toBeInTheDocument();
    });
});
