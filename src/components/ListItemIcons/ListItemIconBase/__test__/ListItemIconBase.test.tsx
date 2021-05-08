import ListItemIconBase, { ListItemIconBaseProps } from "../";

import { render, screen } from "@testing-library/react";

describe("<ListItemIconBase />", () => {
    let props: ListItemIconBaseProps;

    it("should exist children", () => {
        props = {
            children: "Test",
        };
        render(<ListItemIconBase {...props} />);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children", () => {
        props = {
            children: "Test",
            color: "primary",
            bgColor: "primary",
        };
        render(<ListItemIconBase {...props} />);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children", () => {
        props = {
            children: "Test",
            color: "secondary",
            bgColor: "secondary",
        };
        render(<ListItemIconBase {...props} />);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
