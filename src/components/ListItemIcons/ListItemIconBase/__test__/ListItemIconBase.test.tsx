import { useTheme, Theme } from "@material-ui/core";

import ListItemIconBase, { ListItemIconBaseProps } from "../";

import { render, screen } from "@testing-library/react";

describe("<ListItemIconBase />", () => {
    let props: ListItemIconBaseProps;
    let theme: Theme;

    const ListItemIconBaseTest = (props: ListItemIconBaseProps) => {
        theme = useTheme();
        return <ListItemIconBase {...props} />;
    };

    it("should exist children with default style", () => {
        props = {
            children: "Test",
            bgColor: "primary",
        };
        render(<ListItemIconBaseTest {...props} />);
        const muiBox = screen.getByTestId("ListItemIconBase__root");
        expect(screen.getByText("Test")).toBeInTheDocument();
        expect(muiBox).toHaveStyle(`color: ${theme.palette.primary.contrastText};`);
        expect(muiBox).toHaveStyle(`background-color: ${theme.palette.primary.main};`);
    });

    it("should exist children with primary color and primary background-color", () => {
        props = {
            children: "Test",
            color: "primary",
            bgColor: "primary",
        };
        render(<ListItemIconBaseTest {...props} />);
        const muiBox = screen.getByTestId("ListItemIconBase__root");
        expect(screen.getByText("Test")).toBeInTheDocument();
        expect(muiBox).toHaveStyle(`color: ${theme.palette.primary.main};`);
        expect(muiBox).toHaveStyle(`background-color: ${theme.palette.primary.main};`);
    });

    it("should exist children with secondary color and secondary background-color", () => {
        props = {
            children: "Test",
            color: "secondary",
            bgColor: "secondary",
        };
        render(<ListItemIconBaseTest {...props} />);
        const muiBox = screen.getByTestId("ListItemIconBase__root");
        expect(screen.getByText("Test")).toBeInTheDocument();
        expect(muiBox).toHaveStyle(`color: ${theme.palette.secondary.main};`);
        expect(muiBox).toHaveStyle(`background-color: ${theme.palette.secondary.main};`);
    });
});
