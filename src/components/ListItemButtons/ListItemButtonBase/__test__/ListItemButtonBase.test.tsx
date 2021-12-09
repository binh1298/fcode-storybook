import { useTheme, Theme } from "@mui/material";

import ListItemButtonBase, { ListItemButtonBaseProps } from "..";

import { render, screen } from "@testing-library/react";
import TestThemeProvider from "src/test-utils/TestThemeProvider";

describe("<ListItemButtonBase />", () => {
    let props: ListItemButtonBaseProps;
    let theme: Theme;
    const ListItemButtonBaseTest = (props: ListItemButtonBaseProps) => {
        theme = useTheme();
        return <ListItemButtonBase {...props} />;
    };

    const TestComponent = (props: ListItemButtonBaseProps) => {
        return (
            <TestThemeProvider>
                <ListItemButtonBaseTest {...props} />
            </TestThemeProvider>
        );
    };

    it("should exist children with default variant and color", () => {
        props = {
            children: "Test",
        };
        render(<TestComponent {...props} />);
        const muiListItem = screen.getByTestId("ListItemButtonBase__root");
        expect(muiListItem).toHaveStyle("justify-content: flex-start;");
        expect(muiListItem).toHaveStyle(`color: ${theme.palette.primary.contrastText};`);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children with default variant and hightlight color", () => {
        props = {
            children: "Test",
            isHighlighted: true,
        };
        render(<TestComponent {...props} />);
        const muiListItem = screen.getByTestId("ListItemButtonBase__root");
        expect(muiListItem).toHaveStyle("justify-content: flex-start;");
        expect(muiListItem).toHaveStyle(`color: ${theme.palette.secondary.main};`);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
