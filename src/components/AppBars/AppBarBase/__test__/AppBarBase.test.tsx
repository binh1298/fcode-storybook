import { useTheme, Theme } from "@mui/material";

import AppBarBase, { AppBarBaseProps } from "..";

import { render, screen } from "@testing-library/react";
import TestThemeProvider from "src/test-utils/TestThemeProvider";

describe("<AppBarBase />", () => {
    let props: AppBarBaseProps;
    let theme: Theme;
    const AppBarBaseTest = (props: AppBarBaseProps) => {
        theme = useTheme();
        return <AppBarBase {...props} />;
    };

    const TestComponent = (props: AppBarBaseProps) => (
        <TestThemeProvider>
            <AppBarBaseTest {...props} />
        </TestThemeProvider>
    );

    it("should exist children with default style when drawer closed", () => {
        render(<TestComponent />);
        const appBarBaseRoot = screen.getByTestId("AppBarBase__root");
        expect(appBarBaseRoot).toHaveStyle(`
        position: fixed;
        width: 100%;
        top: 0;
        left: auto;
        right: 0;
        zIndex: ${theme.zIndex.drawer + 1} ;
        transition: ${theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        })};`);
    });

    it("should exist children with custom style when drawer opened", () => {
        const drawerWidth: number = 400;
        props = {
            width: drawerWidth,
            open: true,
        };
        render(<TestComponent {...props} />);
        const appBarBaseRoot = screen.getByTestId("AppBarBase__root");
        expect(appBarBaseRoot).toHaveStyle(`
        position: fixed;
        width: calc(100% - ${drawerWidth}px);
        top: 0;
        left: auto;
        right: 0;
        margin-left: ${drawerWidth}px;
        zIndex: ${theme.zIndex.drawer + 1} ;
        transition: ${theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        })};
        `);
    });
});
