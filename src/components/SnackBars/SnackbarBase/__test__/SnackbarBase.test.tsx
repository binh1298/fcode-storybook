import SnackbarBase, { SnackbarBaseProps } from "..";

import { render, screen, RenderResult } from "@testing-library/react";

describe("<SnackbarBase />", () => {
    let wrapper: RenderResult;
    const props: SnackbarBaseProps = {
        children: <div>Test</div>,
        open: true,
    };

    beforeEach(() => {
        wrapper = render(<SnackbarBase {...props} />);
    });

    it("should exist children", () => {
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
