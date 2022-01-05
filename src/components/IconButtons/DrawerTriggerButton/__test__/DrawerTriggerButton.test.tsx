import { Menu as MenuIcon } from "@mui/icons-material";

import DrawerTriggerButton, { DrawerTriggerButtonProps } from "..";

import { render, screen } from "@testing-library/react";
import TestThemeProvider from "src/test-utils/TestThemeProvider";
import replyTheme from "src/theme/replyTheme";

describe("<DrawerTriggerButton />", () => {
    let props: DrawerTriggerButtonProps;

    const TestComponent = (props: DrawerTriggerButtonProps) => (
        <TestThemeProvider>
            <DrawerTriggerButton {...props} />
        </TestThemeProvider>
    );

    it("should exist children with primary color", () => {
        props = {
            children: <MenuIcon />,
            open: false,
            color: "primary",
        };
        render(<TestComponent {...props} />);
        const drawerTriggerButtonRoot = screen.getByTestId("DrawerTriggerButton__root");

        expect(drawerTriggerButtonRoot).toHaveStyle(`
            color: ${replyTheme.palette.primary.main};
            display: block;
        `);
    });

    it("should exist children with secondary color", () => {
        props = {
            children: <MenuIcon />,
            open: false,
            color: "secondary",
        };
        render(<TestComponent {...props} />);
        const drawerTriggerButtonRoot = screen.getByTestId("DrawerTriggerButton__root");

        expect(drawerTriggerButtonRoot).toHaveStyle(`
            color: ${replyTheme.palette.secondary.main};
            display: block;
        `);
    });

    it("should not exist children", () => {
        props = {
            children: <MenuIcon />,
            open: true,
        };
        render(<TestComponent {...props} />);
        const drawerTriggerButtonRoot = screen.getByTestId("DrawerTriggerButton__root");

        expect(drawerTriggerButtonRoot).toHaveStyle(`
            display: none;
        `);
    });
});
