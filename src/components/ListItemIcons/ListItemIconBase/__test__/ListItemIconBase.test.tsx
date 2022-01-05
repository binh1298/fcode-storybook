import ListItemIconBase, { ListItemIconBaseProps } from "../";

import { render, screen } from "@testing-library/react";

describe("<ListItemIconBase />", () => {
    const props: ListItemIconBaseProps = {
        children: "Test",
    };

    beforeEach(() => {
        render(<ListItemIconBase {...props} />);
    });

    it("should exist children", () => {
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
