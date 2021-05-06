import ChipBase, { ChipBaseProps } from "..";

import { render, RenderResult, screen } from "@testing-library/react";

describe("<IconBase />", () => {
    let wrapper: RenderResult;

    const props: ChipBaseProps = {
        label: <div>Test</div>,
    };

    beforeEach(() => {
        wrapper = render(<ChipBase {...props} />);
    });

    it("should exist label", () => {
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
