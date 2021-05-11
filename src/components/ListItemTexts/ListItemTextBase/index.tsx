import { CSSProperties } from "react";

import {
    ListItemText as MaterialListItemText,
    ListItemTextProps as MaterialListItemTextProps,
    Box as MaterialBox,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

export interface ListItemTextBaseProps extends MaterialListItemTextProps {
    color?: "primary" | "secondary" | "secondary-main";
}

const ListItemTextBase = (props: ListItemTextBaseProps) => {
    const theme = useTheme();
    const { color, ...rest } = props;
    let listItemTextBaseStyle: CSSProperties = {};
    switch (color) {
        case "primary":
            listItemTextBaseStyle.color = theme.palette.primary.contrastText;
            break;
        case "secondary":
            listItemTextBaseStyle.color = theme.palette.secondary.contrastText;
            break;
        case "secondary-main":
            listItemTextBaseStyle.color = theme.palette.secondary.main;
            break;
        default:
            listItemTextBaseStyle.color = theme.palette.primary.contrastText;
            break;
    }

    return (
        <MaterialBox data-testid="muiBox" style={listItemTextBaseStyle}>
            <MaterialListItemText {...rest} />
        </MaterialBox>
    );
};

export default ListItemTextBase;
