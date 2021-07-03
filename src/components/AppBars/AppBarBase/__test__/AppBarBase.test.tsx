import { useTheme, Theme } from "@material-ui/core";

import AppBarBase, { AppBarBaseProps } from "..";

import { render, screen } from "@testing-library/react";

describe("<AppBarBase />", () => {
    let props: AppBarBaseProps;
    let theme: Theme;
    const AppBarBaseTest = (props: AppBarBaseProps) => {
        theme = useTheme();
        return <AppBarBase {...props} />;
    };

    it("should exist children with default style when drawer closed", () => {
        render(<AppBarBaseTest />);
        const appBarBaseBox = screen.getByTestId("AppBarBase__box");
        expect(appBarBaseBox).toHaveStyle(`
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
        const appBarWidth: number = 400;
        props = {
            width: appBarWidth,
            open: true,
        };
        render(<AppBarBaseTest {...props} />);
        const appBarBaseBox = screen.getByTestId("AppBarBase__box");
        expect(appBarBaseBox).toHaveStyle(`
        position: fixed;
        width: calc(100% - ${appBarWidth}px);
        top: 0;
        left: auto;
        right: 0;
        margin-left: ${appBarWidth}px;
        zIndex: ${theme.zIndex.drawer + 1} ;
        transition: ${theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        })};
        `);
    });
});
