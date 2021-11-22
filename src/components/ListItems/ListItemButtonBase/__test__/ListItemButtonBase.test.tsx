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

    const TestComponent = (props: ListItemButtonBaseProps) => (
        <TestThemeProvider>
            <ListItemButtonBaseTest {...props} />
        </TestThemeProvider>
    );

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
            highlighted: true,
        };
        render(<TestComponent {...props} />);
        const muiListItem = screen.getByTestId("ListItemButtonBase__root");
        expect(muiListItem).toHaveStyle("justify-content: flex-start;");
        expect(muiListItem).toHaveStyle(`color: ${theme.palette.secondary.main};`);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children with left variant and color", () => {
        props = {
            children: "Test",
            variant: "left",
        };
        render(<TestComponent {...props} />);
        const muiListItem = screen.getByTestId("ListItemButtonBase__root");
        expect(muiListItem).toHaveStyle("justify-content: flex-start;");
        expect(muiListItem).toHaveStyle(`color: ${theme.palette.primary.contrastText};`);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children with left variant and hightlight color", () => {
        props = {
            children: "Test",
            variant: "left",
            highlighted: true,
        };
        render(<TestComponent {...props} />);
        const muiListItem = screen.getByTestId("ListItemButtonBase__root");
        expect(muiListItem).toHaveStyle("justify-content: flex-start;");
        expect(muiListItem).toHaveStyle(`color: ${theme.palette.secondary.main};`);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children with center variant and color", () => {
        props = {
            children: "Test",
            variant: "center",
        };
        render(<TestComponent {...props} />);
        const muiListItem = screen.getByTestId("ListItemButtonBase__root");
        expect(muiListItem).toHaveStyle("justify-content: center;");
        expect(muiListItem).toHaveStyle(`color: ${theme.palette.primary.contrastText};`);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children with center variant and hightlight color", () => {
        props = {
            children: "Test",
            variant: "center",
            highlighted: true,
        };
        render(<TestComponent {...props} />);
        const muiListItem = screen.getByTestId("ListItemButtonBase__root");
        expect(muiListItem).toHaveStyle("justify-content: center;");
        expect(muiListItem).toHaveStyle(`color: ${theme.palette.secondary.main};`);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children with right variant and color", () => {
        props = {
            children: "Test",
            variant: "right",
        };
        render(<TestComponent {...props} />);
        const muiListItem = screen.getByTestId("ListItemButtonBase__root");
        expect(muiListItem).toHaveStyle("justify-content: flex-end;");
        expect(muiListItem).toHaveStyle(`color: ${theme.palette.primary.contrastText};`);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children with right variant and hightlight color", () => {
        props = {
            children: "Test",
            variant: "right",
            highlighted: true,
        };
        render(<TestComponent {...props} />);
        const muiListItem = screen.getByTestId("ListItemButtonBase__root");
        expect(muiListItem).toHaveStyle("justify-content: flex-end;");
        expect(muiListItem).toHaveStyle(`color: ${theme.palette.secondary.main};`);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
