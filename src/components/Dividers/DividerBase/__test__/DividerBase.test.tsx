import DividerBase, { DividerBaseProps } from "..";

import { render, RenderResult } from "@testing-library/react";

describe("<DividerBase />", () => {
    let wrapper: RenderResult;

    const props: DividerBaseProps = {};

    beforeEach(() => {
        wrapper = render(<DividerBase {...props} />);
    });

    it("should render with default style", () => {
        expect(wrapper.container.querySelector("hr")).toBeDefined();
    });
});
