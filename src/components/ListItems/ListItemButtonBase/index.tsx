import { CSSProperties } from "react";

import {
    ListItemButton as MaterialListItemButton,
    ListItemButtonProps as MaterialListItemButtonProps,
    useTheme,
    Theme,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

export interface ListItemButtonBaseProps extends MaterialListItemButtonProps {
    variant?: "left" | "center" | "right";
    highlighted?: boolean;
}

const useStyles = makeStyles<Theme>((theme) => ({
    root: {
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
        },
    },
}));

const ListItemButtonBase = (props: ListItemButtonBaseProps) => {
    const theme = useTheme();
    const classes = useStyles();
    const { variant, highlighted, ...rest } = props;
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
        listItemBaseStyle.color = theme.palette.secondary.main;
    } else {
        listItemBaseStyle.color = theme.palette.primary.contrastText;
    }

    return (
        <MaterialListItemButton
            data-testid="ListItemButtonBase__root"
            style={listItemBaseStyle}
            className={classes.root}
            {...rest}
        />
    );
};

export default ListItemButtonBase;
