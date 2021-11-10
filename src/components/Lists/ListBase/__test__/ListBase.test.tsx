import ListBase, { ListBaseProps } from "..";

import { render, screen } from "@testing-library/react";

describe("<ListBase />", () => {
    let props: ListBaseProps;

    it("should exist children with default style", () => {
        props = {
            children: "Test",
        };
        render(<ListBase {...props} />);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children with customized width", () => {
        props = {
            children: "Test",
            disablePadding: true,
        };
        render(<ListBase {...props} />);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
