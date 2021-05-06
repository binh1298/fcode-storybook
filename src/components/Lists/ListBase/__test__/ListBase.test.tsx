import ListBase, { ListBaseProps } from "..";

import { render, RenderResult, screen } from "@testing-library/react";

describe("<ListBase />", () => {
    let wrapper: RenderResult;

    const props: ListBaseProps = {
        children: <div>Test</div>,
    };

    beforeEach(() => {
        wrapper = render(<ListBase {...props} />);
    });

    it("should exist children", () => {
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
