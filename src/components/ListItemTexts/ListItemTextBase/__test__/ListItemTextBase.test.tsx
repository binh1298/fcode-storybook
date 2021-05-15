import { useTheme, Theme } from "@material-ui/core";

import ListItemTextBase, { ListItemTextBaseProps } from "..";

import { render, screen } from "@testing-library/react";

describe("<ListItemTextBase />", () => {
    let props: ListItemTextBaseProps;
    let theme: Theme;
    const ListBaseTextBaseTest = (props: ListItemTextBaseProps) => {
        theme = useTheme();
        return <ListItemTextBase {...props} />;
    };

    it("should exist children with default style", () => {
        props = {
            primary: "Test",
        };
        render(<ListBaseTextBaseTest {...props} />);
        const muiBox = screen.getByTestId("ListItemTextBase__root");
        expect(screen.getByText("Test")).toBeInTheDocument();
        expect(muiBox).toHaveStyle(`color: ${theme.palette.primary.contrastText};`);
    });

    it("should exist children with primary color", () => {
        props = {
            primary: "Test",
            color: "primary",
        };
        render(<ListItemTextBase {...props} />);
        const muiBox = screen.getByTestId("ListItemTextBase__root");
        expect(screen.getByText("Test")).toBeInTheDocument();
        expect(muiBox).toHaveStyle(`color: ${theme.palette.primary.contrastText};`);
    });

    it("should exist children with secondary color", () => {
        props = {
            primary: "Test",
            color: "secondary",
        };
        render(<ListItemTextBase {...props} />);
        const muiBox = screen.getByTestId("ListItemTextBase__root");
        expect(screen.getByText("Test")).toBeInTheDocument();
        expect(muiBox).toHaveStyle(`color: ${theme.palette.secondary.contrastText};`);
    });

    it("should exist children with secondary-main color", () => {
        props = {
            primary: "Test",
            color: "secondary-main",
        };
        render(<ListItemTextBase {...props} />);
        const muiBox = screen.getByTestId("ListItemTextBase__root");
        expect(screen.getByText("Test")).toBeInTheDocument();
        expect(muiBox).toHaveStyle(`color: ${theme.palette.secondary.main};`);
    });
});
