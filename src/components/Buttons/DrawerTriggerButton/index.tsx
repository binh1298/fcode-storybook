import { CSSProperties } from "react";

import {
    IconButton as MaterialIconButton,
    IconButtonProps as MaterialIconButtonProps,
} from "@material-ui/core";

import BoxBase from "../../Boxs/BoxBase";

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
