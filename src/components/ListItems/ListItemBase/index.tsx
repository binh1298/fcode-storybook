import {
    ListItem as MaterialListItem,
    ListItemProps as MaterialListItemProps,
    makeStyles,
    Theme,
} from "@material-ui/core";

import BoxBase from "../../Boxs/BoxBase";

export interface ListItemBaseProps extends MaterialListItemProps {
    justifyContent?:
        | "flex-start"
        | "flex-end"
        | "center"
        | "space-between"
        | "space-around"
        | "space-evenly"
        | "inital"
        | "inherit";
}

const useStyles = makeStyles<Theme>((theme) => ({
    root: {
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
        },
    },
}));

const ListItemBase = (props: ListItemBaseProps) => {
    const { button, justifyContent, ...rest } = props;
    const classes = useStyles();

    return (
        <BoxBase bgcolor="primary">
            <MaterialListItem
                className={classes.root}
                button={button as false}
                style={{ justifyContent }}
                {...rest}
            />
        </BoxBase>
    );
};

export default ListItemBase;
