import { Menu as MenuIcon } from "@mui/icons-material";

import AppBarBase, { AppBarBaseProps } from ".";
import DrawerTriggerButton from "../../Buttons/DrawerTriggerButton";
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
                <TypographyBase variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Basic App Bar
                </TypographyBase>
            </ToolbarBase>
        </AppBarBase>
    );
};

Basic.args = {
    position: "static",
};
