import { CSSProperties } from "react";

import {
    ListItemIcon as MaterialListItemIcon,
    ListItemIconProps as MaterialListItemIconProps,
    Box as MaterialBox,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

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
        <MaterialBox ml={3}>
            <MaterialListItemIcon {...rest}>
                <MaterialBox data-testid="muiBox" style={listItemIconBaseStyle}>
                    {children}
                </MaterialBox>
            </MaterialListItemIcon>
        </MaterialBox>
    );
};

export default ListItemIconBase;
