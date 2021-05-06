import ListBase, { ListBaseProps } from "..";

import { render, screen } from "@testing-library/react";

describe("<ListBase />", () => {
    const props: ListBaseProps = {
        children: "Test",
    };

    beforeEach(() => {
        render(<ListBase {...props} />);
    });

    it("should exist children", () => {
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
