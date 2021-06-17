import { useTheme, Theme } from "@material-ui/core";

import ListItemBase, { ListItemBaseProps } from "..";

import { render, screen } from "@testing-library/react";

describe("<ListItemBase />", () => {
    let props: ListItemBaseProps;
    let theme: Theme;
    const ListItemBaseTest = (props: ListItemBaseProps) => {
        theme = useTheme();
        return <ListItemBase {...props} />;
    };

    it("should exist children with default variant and color", () => {
        props = {
            children: "Test",
        };
        render(<ListItemBaseTest {...props} />);
        const muiListItem = screen.getByTestId("ListItemBase__root");
        expect(muiListItem).toHaveStyle("justify-content: flex-start;");
        expect(muiListItem).toHaveStyle(`color: ${theme.palette.primary.contrastText};`);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children with default variant and custom color", () => {
        props = {
            children: "Test",
            color: "success",
        };
        render(<ListItemBaseTest {...props} />);
        const muiListItem = screen.getByTestId("ListItemBase__root");
        expect(muiListItem).toHaveStyle("justify-content: flex-start;");
        expect(muiListItem).toHaveStyle(`color: ${theme.palette.success.contrastText};`);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children with default variant and hightlight color", () => {
        props = {
            children: "Test",
            highlighted: true,
        };
        render(<ListItemBaseTest {...props} />);
        const muiListItem = screen.getByTestId("ListItemBase__root");
        expect(muiListItem).toHaveStyle("justify-content: flex-start;");
        expect(muiListItem).toHaveStyle(`color: ${theme.palette.secondary.main};`);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children with default variant and custom hightlight color", () => {
        props = {
            children: "Test",
            highlighted: true,
            hlcolor: "success",
        };
        render(<ListItemBaseTest {...props} />);
        const muiListItem = screen.getByTestId("ListItemBase__root");
        expect(muiListItem).toHaveStyle("justify-content: flex-start;");
        expect(muiListItem).toHaveStyle(`color: ${theme.palette.success.main};`);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children with left variant and color", () => {
        props = {
            children: "Test",
            variant: "left",
        };
        render(<ListItemBaseTest {...props} />);
        const muiListItem = screen.getByTestId("ListItemBase__root");
        expect(muiListItem).toHaveStyle("justify-content: flex-start;");
        expect(muiListItem).toHaveStyle(`color: ${theme.palette.primary.contrastText};`);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children with left variant and custom color", () => {
        props = {
            children: "Test",
            variant: "left",
            color: "success",
        };
        render(<ListItemBaseTest {...props} />);
        const muiListItem = screen.getByTestId("ListItemBase__root");
        expect(muiListItem).toHaveStyle("justify-content: flex-start;");
        expect(muiListItem).toHaveStyle(`color: ${theme.palette.success.contrastText};`);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children with left variant and hightlight color", () => {
        props = {
            children: "Test",
            variant: "left",
            highlighted: true,
        };
        render(<ListItemBaseTest {...props} />);
        const muiListItem = screen.getByTestId("ListItemBase__root");
        expect(muiListItem).toHaveStyle("justify-content: flex-start;");
        expect(muiListItem).toHaveStyle(`color: ${theme.palette.secondary.main};`);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children with left variant and custom hightlight color", () => {
        props = {
            children: "Test",
            variant: "left",
            highlighted: true,
            hlcolor: "success",
        };
        render(<ListItemBaseTest {...props} />);
        const muiListItem = screen.getByTestId("ListItemBase__root");
        expect(muiListItem).toHaveStyle("justify-content: flex-start;");
        expect(muiListItem).toHaveStyle(`color: ${theme.palette.success.main};`);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children with center variant and color", () => {
        props = {
            children: "Test",
            variant: "center",
        };
        render(<ListItemBaseTest {...props} />);
        const muiListItem = screen.getByTestId("ListItemBase__root");
        expect(muiListItem).toHaveStyle("justify-content: center;");
        expect(muiListItem).toHaveStyle(`color: ${theme.palette.primary.contrastText};`);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children with center variant and custom color", () => {
        props = {
            children: "Test",
            variant: "center",
            color: "success",
        };
        render(<ListItemBaseTest {...props} />);
        const muiListItem = screen.getByTestId("ListItemBase__root");
        expect(muiListItem).toHaveStyle("justify-content: center;");
        expect(muiListItem).toHaveStyle(`color: ${theme.palette.success.contrastText};`);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children with center variant and hightlight color", () => {
        props = {
            children: "Test",
            variant: "center",
            highlighted: true,
        };
        render(<ListItemBaseTest {...props} />);
        const muiListItem = screen.getByTestId("ListItemBase__root");
        expect(muiListItem).toHaveStyle("justify-content: center;");
        expect(muiListItem).toHaveStyle(`color: ${theme.palette.secondary.main};`);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children with center variant and custom hightlight color", () => {
        props = {
            children: "Test",
            variant: "center",
            highlighted: true,
            hlcolor: "success",
        };
        render(<ListItemBaseTest {...props} />);
        const muiListItem = screen.getByTestId("ListItemBase__root");
        expect(muiListItem).toHaveStyle("justify-content: center;");
        expect(muiListItem).toHaveStyle(`color: ${theme.palette.success.main};`);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children with right variant and color", () => {
        props = {
            children: "Test",
            variant: "right",
        };
        render(<ListItemBaseTest {...props} />);
        const muiListItem = screen.getByTestId("ListItemBase__root");
        expect(muiListItem).toHaveStyle("justify-content: flex-end;");
        expect(muiListItem).toHaveStyle(`color: ${theme.palette.primary.contrastText};`);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children with right variant and custom color", () => {
        props = {
            children: "Test",
            variant: "right",
            color: "success",
        };
        render(<ListItemBaseTest {...props} />);
        const muiListItem = screen.getByTestId("ListItemBase__root");
        expect(muiListItem).toHaveStyle("justify-content: flex-end;");
        expect(muiListItem).toHaveStyle(`color: ${theme.palette.success.contrastText};`);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children with right variant and hightlight color", () => {
        props = {
            children: "Test",
            variant: "right",
            highlighted: true,
        };
        render(<ListItemBaseTest {...props} />);
        const muiListItem = screen.getByTestId("ListItemBase__root");
        expect(muiListItem).toHaveStyle("justify-content: flex-end;");
        expect(muiListItem).toHaveStyle(`color: ${theme.palette.secondary.main};`);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children with right variant and custom hightlight color", () => {
        props = {
            children: "Test",
            variant: "right",
            highlighted: true,
            hlcolor: "success",
        };
        render(<ListItemBaseTest {...props} />);
        const muiListItem = screen.getByTestId("ListItemBase__root");
        expect(muiListItem).toHaveStyle("justify-content: flex-end;");
        expect(muiListItem).toHaveStyle(`color: ${theme.palette.success.main};`);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
