import { Menu as MenuIcon } from "@mui/icons-material";
import { useTheme, Theme } from "@mui/material";

import DrawerTriggerButton, { DrawerTriggerButtonProps } from "..";

import { render, screen } from "@testing-library/react";

describe("<DrawerTriggerButton />", () => {
    let props: DrawerTriggerButtonProps;
    let theme: Theme;
    const DrawerTriggerButtonTest = (props: DrawerTriggerButtonProps) => {
        theme = useTheme();
        return <DrawerTriggerButton {...props} />;
    };

    it("should exist children with primary color", () => {
        props = {
            children: <MenuIcon />,
            open: false,
            color: "primary",
        };
        render(<DrawerTriggerButtonTest {...props} />);
        const drawerTriggerButton = screen.getByTestId("DrawerTriggerButton__root");
        expect(drawerTriggerButton).toHaveStyle(`color: ${theme.palette.primary.main};`);
        const drawerTriggerButtonBox = screen.getByTestId("DrawerTriggerButton__box");
        expect(drawerTriggerButtonBox).toHaveStyle("display: block");
    });

    it("should exist children with secondary color", () => {
        props = {
            children: <MenuIcon />,
            open: false,
            color: "secondary",
        };
        render(<DrawerTriggerButtonTest {...props} />);
        const drawerTriggerButton = screen.getByTestId("DrawerTriggerButton__root");
        expect(drawerTriggerButton).toHaveStyle(`color: ${theme.palette.secondary.main};`);
        const drawerTriggerButtonBox = screen.getByTestId("DrawerTriggerButton__box");
        expect(drawerTriggerButtonBox).toHaveStyle("display: block");
    });

    it("should not exist children", () => {
        props = {
            children: <MenuIcon />,
            open: true,
        };
        render(<DrawerTriggerButtonTest {...props} />);
        const drawerTriggerButtonBox = screen.getByTestId("DrawerTriggerButton__box");
        expect(drawerTriggerButtonBox).toHaveStyle("display: none");
    });
});
