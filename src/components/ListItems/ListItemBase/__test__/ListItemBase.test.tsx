import ListItemBase, { ListItemBaseProps } from "..";

import { render, screen } from "@testing-library/react";

describe("<ListItemBase />", () => {
    const props: ListItemBaseProps = {
        children: "Test",
    };

    beforeEach(() => {
        render(<ListItemBase {...props} />);
    });

    it("should exist children with default style", () => {
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
