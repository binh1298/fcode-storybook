import { Menu as MenuIcon } from "@mui/icons-material";

import AppBarBase, { AppBarBaseProps } from ".";
import DrawerTriggerButton from "../../IconButtons/DrawerTriggerButton";
import ToolbarBase from "../../Toolbars/ToolbarBase";
import TypographyBase from "../../Typography/TypographyBase";

import { Story } from "@storybook/react";

export default {
    title: "Components/AppBarBase",
    component: AppBarBase,
    subcomponents: {
        ToolbarBase,
        DrawerTriggerButton,
        TypographyBase,
    },
};

export const Basic: Story<AppBarBaseProps> = (args) => {
    return (
        <AppBarBase {...args}>
            <ToolbarBase>
                <DrawerTriggerButton>
                    <MenuIcon />
                </DrawerTriggerButton>
                <TypographyBase variant="h6">Basic App Bar</TypographyBase>
            </ToolbarBase>
        </AppBarBase>
    );
};

Basic.args = {
    position: "static",
};
