import ListItemTextBase, { ListItemTextBaseProps } from "..";

import { render, screen } from "@testing-library/react";

describe("<ListItemTextBase />", () => {
    const props: ListItemTextBaseProps = {
        children: "Test",
    };

    beforeEach(() => {
        render(<ListItemTextBase {...props} />);
    });

    it("should exist children", () => {
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
