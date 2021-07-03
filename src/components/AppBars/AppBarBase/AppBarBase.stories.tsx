import { Menu as MenuIcon } from "@material-ui/icons";

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

export const Simple: Story<AppBarBaseProps> = (args) => {
    return (
        <AppBarBase {...args}>
            <ToolbarBase>
                <DrawerTriggerButton>
                    <MenuIcon />
                </DrawerTriggerButton>
                <TypographyBase variant="h6" noWrap>
                    Simple App Bar Drawer
                </TypographyBase>
            </ToolbarBase>
        </AppBarBase>
    );
};
