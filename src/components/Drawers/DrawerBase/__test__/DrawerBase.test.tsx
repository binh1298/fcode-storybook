import { useTheme, Theme } from "@material-ui/core";

import DrawerBase, { DrawerBaseProps } from "..";

import { render, screen } from "@testing-library/react";

describe("<DrawerBase />", () => {
    let props: DrawerBaseProps;
    let theme: Theme;
    const DrawerBaseTest = (props: DrawerBaseProps) => {
        theme = useTheme();
        return <DrawerBase {...props} />;
    };

    it("should exist children with default style when drawer closed", () => {
        props = {
            children: <div>Testing Drawer Component</div>,
            variant: "permanent",
        };
        render(<DrawerBaseTest {...props} />);
        const drawerBaseBox = screen.getByTestId("DrawerBase__box");
        expect(drawerBaseBox).toHaveStyle(`
        width: ${theme.spacing(10)}px;
        flexShrink: 0;
        whiteSpace: nowrap;
        transition: ${theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        })};
        overflowX: hidden;`);

        const drawerBaseRoot = screen.getByTestId("DrawerBase__root");
        const drawerBasePaper = drawerBaseRoot.firstChild;
        expect(drawerBasePaper).toHaveStyle(`
        width: ${theme.spacing(10)}px;
        overflowX: hidden;
        left: 0;
        right: auto;
        `);
    });

    it("should exist children with custom style when drawer opened", () => {
        const drawerWidth: number = 400;
        props = {
            children: <div>Testing Drawer Component</div>,
            variant: "permanent",
            width: drawerWidth,
            open: true,
        };
        render(<DrawerBaseTest {...props} />);
        const drawerBaseBox = screen.getByTestId("DrawerBase__box");
        expect(drawerBaseBox).toHaveStyle(`
        flexShrink: 0;
        whiteSpace: nowrap;
        transition: ${theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        })};`);

        const drawerBaseRoot = screen.getByTestId("DrawerBase__root");
        const drawerBasePaper = drawerBaseRoot.firstChild;
        expect(drawerBasePaper).toHaveStyle(`
        width: ${drawerWidth}px;`);
    });
});
