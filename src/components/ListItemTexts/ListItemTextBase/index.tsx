import {
    ListItemText as MaterialListItemText,
    ListItemTextProps as MaterialListItemTextProps,
    Box as MaterialBox,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

export interface ListItemTextBaseProps extends MaterialListItemTextProps {
    color?: "primary" | "secondary";
}

const ListItemTextBase = (props: ListItemTextBaseProps) => {
    const theme = useTheme();
    const { color, ...rest } = props;
    let listItemTextBaseColor: string;
    switch (color) {
        case "primary":
            listItemTextBaseColor = theme.palette.primary.contrastText;
            break;
        case "secondary":
            listItemTextBaseColor = theme.palette.secondary.main;
            break;
        default:
            listItemTextBaseColor = theme.palette.primary.contrastText;
            break;
    }

    return (
        <MaterialBox color={listItemTextBaseColor}>
            <MaterialListItemText {...rest} />
        </MaterialBox>
    );
};

export default ListItemTextBase;
