import ListItemBase, { ListItemBaseProps } from "..";

import { render, RenderResult, screen } from "@testing-library/react";

describe("<ListItemBase />", () => {
    let wrapper: RenderResult;

    const props: ListItemBaseProps = {
        children: <div>Test</div>,
    };

    beforeEach(() => {
        wrapper = render(<ListItemBase {...props} />);
    });

    it("should exist children", () => {
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
