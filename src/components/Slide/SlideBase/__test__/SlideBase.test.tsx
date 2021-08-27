import SlideBase, { SlideBaseProps } from "../";

import { render, screen } from "@testing-library/react";

describe("<SlideBase />", () => {
    const props: SlideBaseProps = {
        children: <div>Test</div>,
    };

    it("should exist children when in is true", () => {
        render(<SlideBase {...props} in={true} />);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
