import CssBaselineBase, { CssBaselineBaseProps } from "..";

import { render, screen } from "@testing-library/react";

describe("<CssBaselineBase />", () => {
    const props: CssBaselineBaseProps = {
        children: "Test",
    };

    beforeEach(() => {
        render(<CssBaselineBase {...props} />);
    });

    it("should exist children with default style", () => {
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
