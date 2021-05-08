import ListItemTextBase, { ListItemTextBaseProps } from "..";

import { render, screen } from "@testing-library/react";

describe("<ListItemTextBase />", () => {
    let props: ListItemTextBaseProps;

    it("should exist children", () => {
        props = {
            primary: "Test",
        };
        render(<ListItemTextBase {...props} />);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children", () => {
        props = {
            primary: "Test",
            color: "primary",
        };
        render(<ListItemTextBase {...props} />);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children", () => {
        props = {
            primary: "Test",
            color: "secondary",
        };
        render(<ListItemTextBase {...props} />);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
