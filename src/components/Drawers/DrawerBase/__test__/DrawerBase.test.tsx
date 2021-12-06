import { useTheme, Theme } from "@mui/material";

import DrawerBase, { DrawerBaseProps } from "..";

import { render, screen } from "@testing-library/react";
import TestThemeProvider from "src/test-utils/TestThemeProvider";

describe("<DrawerBase />", () => {
    let props: DrawerBaseProps;
    let theme: Theme;
    const DrawerBaseTest = (props: DrawerBaseProps) => {
        theme = useTheme();
        return <DrawerBase {...props} />;
    };

    const TestComponent = (props: DrawerBaseProps) => (
        <TestThemeProvider>
            <DrawerBaseTest {...props} />
        </TestThemeProvider>
    );

    it("should exist children with default style when drawer closed", () => {
        props = {
            children: <div>Testing Drawer Component</div>,
            variant: "permanent",
        };
        render(<TestComponent {...props} />);
        const drawerBaseRoot = screen.getByTestId("DrawerBase__root");
        expect(drawerBaseRoot).toHaveStyle(`
        width: calc(${theme.spacing(8)} + 1px);
        flexShrink: 0;
        whiteSpace: nowrap;
        transition: ${theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        })};
        overflowX: hidden;`);

        const drawerBasePaper = drawerBaseRoot.firstChild;
        expect(drawerBasePaper).toHaveStyle(`
        width: calc(${theme.spacing(8)} + 1px);
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
        render(<TestComponent {...props} />);
        const drawerBaseRoot = screen.getByTestId("DrawerBase__root");
        expect(drawerBaseRoot).toHaveStyle(`
        flexShrink: 0;
        whiteSpace: nowrap;
        transition: ${theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        })};`);

        const drawerBasePaper = drawerBaseRoot.firstChild;
        expect(drawerBasePaper).toHaveStyle(`
        width: ${drawerWidth}px;`);
    });
});
