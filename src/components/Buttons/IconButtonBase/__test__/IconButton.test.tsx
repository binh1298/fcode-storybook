import IconButton, { FabBaseProps } from "../";

import { render, RenderResult, screen } from "@testing-library/react";

describe("<ButtonBase />", () => {
    let wrapper: RenderResult;

    const props: FabBaseProps = {
        children: <div>Test</div>,
    };

    beforeEach(() => {
        wrapper = render(<IconButton {...props} />);
    });

    it("should exist children", () => {
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should match snapshot", () => {
        expect(wrapper.container).toMatchSnapshot();
    });
});
