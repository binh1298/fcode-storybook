import IconBase, { IconBaseProps } from "..";

import { render, RenderResult, screen } from "@testing-library/react";

describe("<IconBase />", () => {
    let wrapper: RenderResult;

    const props: IconBaseProps = {
        icon: <div>Test</div>,
    };

    beforeEach(() => {
        wrapper = render(<IconBase {...props} />);
    });

    it("should exist icon", () => {
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
