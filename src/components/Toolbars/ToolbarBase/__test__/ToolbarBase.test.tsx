import ToolbarBase, { ToolbarBaseProps } from "..";

import { render, screen } from "@testing-library/react";

describe("<ToolbarBase />", () => {
    const props: ToolbarBaseProps = {
        children: "Test",
    };

    beforeEach(() => {
        render(<ToolbarBase {...props} />);
    });

    it("should exist children with default style", () => {
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
