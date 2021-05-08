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
    let listItemIconBaseColor: string, listItemIconBaseBgColor: string;
    switch (color) {
        case "primary":
            listItemIconBaseColor = theme.palette.primary.main;
            break;
        case "secondary":
            listItemIconBaseColor = theme.palette.secondary.main;
            break;
        default:
            listItemIconBaseColor = theme.palette.primary.contrastText;
            break;
    }
    switch (bgColor) {
        case "primary":
            listItemIconBaseBgColor = theme.palette.primary.main;
            break;
        case "secondary":
            listItemIconBaseBgColor = theme.palette.secondary.main;
            break;
        default:
            listItemIconBaseBgColor = theme.palette.primary.main;
            break;
    }

    return (
        <MaterialBox ml={3}>
            <MaterialListItemIcon {...rest}>
                <MaterialBox color={listItemIconBaseColor} bgcolor={listItemIconBaseBgColor}>
                    {children}
                </MaterialBox>
            </MaterialListItemIcon>
        </MaterialBox>
    );
};

export default ListItemIconBase;
