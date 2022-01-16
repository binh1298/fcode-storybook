import { BrowserRouter } from "react-router-dom";

import NavigationBar from "..";

import { render, screen } from "@testing-library/react";

const TestComponent = () => (
    <BrowserRouter>
        <NavigationBar />
    </BrowserRouter>
);
describe("<NavigationBar/>", () => {
    it("Should contain drawer", () => {
        render(<TestComponent />);
        expect(screen.getByText("F-Code")).toBeInTheDocument;
    });
});
