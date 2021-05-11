import ListBase, { ListBaseProps } from "..";

import { render, screen } from "@testing-library/react";

describe("<ListBase />", () => {
    let props: ListBaseProps;

    it("should exist children with default style", () => {
        props = {
            children: "Test",
        };
        render(<ListBase {...props} />);
        const muiBox = screen.getByTestId("muiBox");
        expect(screen.getByText("Test")).toBeInTheDocument();
        expect(muiBox).toHaveStyle("width: 260px;");
    });

    it("should exist children with customized width", () => {
        props = {
            children: "Test",
            width: 360,
        };
        render(<ListBase {...props} />);
        const muiBox = screen.getByTestId("muiBox");
        expect(screen.getByText("Test")).toBeInTheDocument();
        expect(muiBox).toHaveStyle("width: 360px;");
    });
});
