import { CSSProperties } from "react";

import {
    IconButton as MaterialIconButton,
    IconButtonProps as MaterialIconButtonProps,
} from "@mui/material";

import BoxBase from "../../Boxes/BoxBase";

export interface DrawerTriggerButtonProps extends MaterialIconButtonProps {
    open?: boolean;
}

const DrawerTriggerButton = (props: DrawerTriggerButtonProps) => {
    const { open, ...rest } = props;
    let drawerTriggerButtonStyle: CSSProperties = {};

    if (open) {
        drawerTriggerButtonStyle.display = "none";
    }
    drawerTriggerButtonStyle.color = "inherit";

    return (
        <BoxBase mr={4} style={drawerTriggerButtonStyle} data-testid="DrawerTriggerButton__box">
            <MaterialIconButton
                data-testid="DrawerTriggerButton__root"
                color="inherit"
                edge="start"
                {...rest}
            />
        </BoxBase>
    );
};

export default DrawerTriggerButton;
