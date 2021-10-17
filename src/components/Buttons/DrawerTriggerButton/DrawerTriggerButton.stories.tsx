import { Menu as MenuIcon } from "@mui/icons-material";

import DrawerTriggerButton, { DrawerTriggerButtonProps } from ".";
import BoxBase from "../../Boxes/BoxBase";

import { Story } from "@storybook/react";

export default {
    title: "Components/DrawerTriggerButton",
    component: DrawerTriggerButton,
};

export const Primary: Story<DrawerTriggerButtonProps> = (args) => (
    <BoxBase bgcolor="primary" pl={2} display="inline-block">
        <DrawerTriggerButton {...args}>
            <MenuIcon />
        </DrawerTriggerButton>
    </BoxBase>
);
