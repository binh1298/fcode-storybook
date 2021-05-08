import ListBase, { ListBaseProps } from "..";

import { render, screen } from "@testing-library/react";

describe("<ListBase />", () => {
    let props: ListBaseProps;

    it("should exist children", () => {
        props = {
            children: "Test",
        };
        render(<ListBase {...props} />);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children", () => {
        props = {
            children: "Test",
            width: 360,
        };
        render(<ListBase {...props} />);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
