import { CSSProperties } from "react";

import {
    ListItem as MaterialListItem,
    ListItemProps as MaterialListItemProps,
    useTheme,
    makeStyles,
    Theme,
} from "@material-ui/core";

export interface ListItemBaseProps extends MaterialListItemProps {
    variant?: "left" | "center" | "right";
    color?: "primary" | "secondary" | "info" | "error" | "warning" | "success";
    highlighted?: boolean;
    hlcolor?: "primary" | "secondary" | "info" | "error" | "warning" | "success";
}

const useStyles = makeStyles<Theme>((theme) => ({
    root: {
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
        },
    },
}));

const ListItemBase = (props: ListItemBaseProps) => {
    const theme = useTheme();
    const classes = useStyles();
    const { button, variant, color, highlighted, hlcolor, ...rest } = props;
    let listItemBaseStyle: CSSProperties = {};
    switch (variant) {
        case "left":
            listItemBaseStyle.justifyContent = "flex-start";
            break;
        case "center":
            listItemBaseStyle.justifyContent = "center";
            break;
        case "right":
            listItemBaseStyle.justifyContent = "flex-end";
            break;
        default:
            listItemBaseStyle.justifyContent = "flex-start";
            break;
    }

    if (highlighted) {
        if (hlcolor) {
            listItemBaseStyle.color = theme.palette[hlcolor].main;
        } else {
            listItemBaseStyle.color = theme.palette.secondary.main;
        }
    } else {
        if (color) {
            listItemBaseStyle.color = theme.palette[color].contrastText;
        } else {
            listItemBaseStyle.color = theme.palette.primary.contrastText;
        }
    }

    return (
        <MaterialListItem
            data-testid="ListItemBase__root"
            style={listItemBaseStyle}
            className={classes.root}
            button={button as false}
            {...rest}
        />
    );
};

export default ListItemBase;
