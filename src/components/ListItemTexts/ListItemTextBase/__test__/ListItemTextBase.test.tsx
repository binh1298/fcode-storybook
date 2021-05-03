import ListItemTextBase, { ListItemTextBaseProps } from "..";

import { render, RenderResult, screen } from "@testing-library/react";

describe("<ButtonBase />", () => {
    let wrapper: RenderResult;

    const props: ListItemTextBaseProps = {
        children: <div>Test</div>,
    };

    beforeEach(() => {
        wrapper = render(<ListItemTextBase {...props} />);
    });

    it("should exist children", () => {
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should match snapshot", () => {
        expect(wrapper.container).toMatchSnapshot();
    });
});
