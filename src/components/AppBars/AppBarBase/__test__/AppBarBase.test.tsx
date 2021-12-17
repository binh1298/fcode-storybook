import AppBarBase, { AppBarBaseProps } from "..";

import { render, screen } from "@testing-library/react";
import TestThemeProvider from "src/test-utils/TestThemeProvider";
import replyTheme from "src/theme/replyTheme";

describe("<AppBarBase />", () => {
    let props: AppBarBaseProps;

    const TestComponent = (props: AppBarBaseProps) => (
        <TestThemeProvider>
            <AppBarBase {...props} />
        </TestThemeProvider>
    );

    it("should exist children with default style when drawer closed", () => {
        render(<TestComponent />);
        const appBarBaseRoot = screen.getByTestId("AppBarBase__root");

        expect(appBarBaseRoot).toHaveStyle(`
        backgroundColor: ${replyTheme.palette.primary.main};
        position: fixed;
        width: 100%;
        top: 0;
        left: auto;
        right: 0;
        zIndex: ${replyTheme.zIndex.drawer + 1} ;
        transition: ${replyTheme.transitions.create(["width", "margin"], {
            easing: replyTheme.transitions.easing.sharp,
            duration: replyTheme.transitions.duration.leavingScreen,
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
        backgroundColor: ${replyTheme.palette.primary.main};
        position: fixed;
        width: calc(100% - ${drawerWidth}px);
        top: 0;
        left: auto;
        right: 0;
        margin-left: ${drawerWidth}px;
        zIndex: ${replyTheme.zIndex.drawer + 1} ;
        transition: ${replyTheme.transitions.create(["width", "margin"], {
            easing: replyTheme.transitions.easing.sharp,
            duration: replyTheme.transitions.duration.enteringScreen,
        })};
        `);
    });
});
