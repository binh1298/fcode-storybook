import ChipBase, { ChipBaseProps } from "..";

import { render, RenderResult, screen } from "@testing-library/react";

describe("<ChipBase />", () => {
    let wrapper: RenderResult;

    const props: ChipBaseProps = {
        label: "Test",
        icon: <div>Test icon</div>,
    };

    beforeEach(() => {
        wrapper = render(<ChipBase {...props} />);
    });

    it("should exist label", () => {
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
    it("should exist icon", () => {
        expect(screen.getByText("Test icon")).toBeInTheDocument();
    });
});
