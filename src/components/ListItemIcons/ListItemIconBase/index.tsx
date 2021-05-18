import { CSSProperties } from "react";

import {
    ListItemIcon as MaterialListItemIcon,
    ListItemIconProps as MaterialListItemIconProps,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import BoxBase from "../../Boxs/BoxBase";

export interface ListItemIconBaseProps extends MaterialListItemIconProps {
    color?: "primary" | "secondary";
    bgColor?: "primary" | "secondary";
}

const ListItemIconBase = (props: ListItemIconBaseProps) => {
    const theme = useTheme();
    const { children, color, bgColor, ...rest } = props;
    let listItemIconBaseStyle: CSSProperties = {};
    switch (color) {
        case "primary":
            listItemIconBaseStyle.color = theme.palette.primary.main;
            break;
        case "secondary":
            listItemIconBaseStyle.color = theme.palette.secondary.main;
            break;
        default:
            listItemIconBaseStyle.color = theme.palette.primary.contrastText;
            break;
    }
    switch (bgColor) {
        case "primary":
            listItemIconBaseStyle.backgroundColor = theme.palette.primary.main;
            break;
        case "secondary":
            listItemIconBaseStyle.backgroundColor = theme.palette.secondary.main;
            break;
        default:
            listItemIconBaseStyle.backgroundColor = theme.palette.primary.main;
            break;
    }

    return (
        <BoxBase ml={3}>
            <MaterialListItemIcon {...rest}>
                <BoxBase data-testid="ListItemIconBase__root" style={listItemIconBaseStyle}>
                    {children}
                </BoxBase>
            </MaterialListItemIcon>
        </BoxBase>
    );
};

export default ListItemIconBase;
