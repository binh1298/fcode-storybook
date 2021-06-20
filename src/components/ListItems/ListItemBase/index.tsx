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
    highlighted?: boolean;
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
    const { button, variant, highlighted, ...rest } = props;
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
