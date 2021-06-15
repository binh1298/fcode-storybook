import ListItemBase, { ListItemBaseProps } from "..";

import { render, screen } from "@testing-library/react";

describe("<ListItemBase />", () => {
    let props: ListItemBaseProps;

    it("should exist children with default style", () => {
        props = {
            children: "Test",
        };
        render(<ListItemBase {...props} />);
        const muiListItem = screen.getByTestId("ListItemBase__root");
        expect(muiListItem).toHaveStyle(`justify-content: flex-start;`);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children with variant left", () => {
        props = {
            variant: "left",
            children: "Test",
        };
        render(<ListItemBase {...props} />);
        const muiListItem = screen.getByTestId("ListItemBase__root");
        expect(muiListItem).toHaveStyle(`justify-content: flex-start;`);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children with variant center", () => {
        props = {
            variant: "center",
            children: "Test",
        };
        render(<ListItemBase {...props} />);
        const muiListItem = screen.getByTestId("ListItemBase__root");
        expect(muiListItem).toHaveStyle(`justify-content: center;`);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children with variant right", () => {
        props = {
            variant: "right",
            children: "Test",
        };
        render(<ListItemBase {...props} />);
        const muiListItem = screen.getByTestId("ListItemBase__root");
        expect(muiListItem).toHaveStyle(`justify-content: flex-end;`);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
