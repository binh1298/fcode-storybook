import AppBarBase, { AppBarBaseProps } from "..";

import { render, screen } from "@testing-library/react";

describe("<AppBarBase />", () => {
    const props: AppBarBaseProps = {
        children: "Test",
    };

    beforeEach(() => {
        render(<AppBarBase {...props} />);
    });

    it("should exist children with default style", () => {
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
