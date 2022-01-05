import DrawerBase, { DrawerBaseProps } from "..";

import { render, screen } from "@testing-library/react";
import TestThemeProvider from "src/test-utils/TestThemeProvider";
import replyTheme from "src/theme/replyTheme";

describe("<DrawerBase />", () => {
    let props: DrawerBaseProps;

    const TestComponent = (props: DrawerBaseProps) => (
        <TestThemeProvider>
            <DrawerBase {...props} />
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
        width: calc(${replyTheme.spacing(8)} + 1px);
        flexShrink: 0;
        whiteSpace: nowrap;
        transition: ${replyTheme.transitions.create("width", {
            easing: replyTheme.transitions.easing.sharp,
            duration: replyTheme.transitions.duration.leavingScreen,
        })};
        overflowX: hidden;`);

        const drawerBasePaper = drawerBaseRoot.firstChild;
        expect(drawerBasePaper).toHaveStyle(`
        width: calc(${replyTheme.spacing(8)} + 1px);
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
        transition: ${replyTheme.transitions.create("width", {
            easing: replyTheme.transitions.easing.sharp,
            duration: replyTheme.transitions.duration.enteringScreen,
        })};`);

        const drawerBasePaper = drawerBaseRoot.firstChild;
        expect(drawerBasePaper).toHaveStyle(`width: ${drawerWidth}px;`);
    });
});
