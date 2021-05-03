import ListItemIconBase, { ListItemIconBaseProps } from "../";

import { render, RenderResult, screen } from "@testing-library/react";

describe("<ListItemIconBase />", () => {
    let wrapper: RenderResult;

    const props: ListItemIconBaseProps = {
        children: <div>Test</div>,
    };

    beforeEach(() => {
        wrapper = render(<ListItemIconBase {...props} />);
    });

    it("should exist children", () => {
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should match snapshot", () => {
        expect(wrapper.container).toMatchSnapshot();
    });
});
