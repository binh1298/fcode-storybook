import {
    ListItem as MaterialListItem,
    ListItemProps as MaterialListItemProps,
    makeStyles,
    Theme,
} from "@material-ui/core";

import BoxBase from "../../Boxs/BoxBase";

export interface ListItemBaseProps extends MaterialListItemProps {}

const useStyles = makeStyles<Theme>((theme) => ({
    root: {
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
        },
    },
}));

const ListItemBase = (props: ListItemBaseProps) => {
    const { button, ...rest } = props;
    const classes = useStyles();

    return (
        <BoxBase bgcolor="primary">
            <MaterialListItem className={classes.root} button={button as false} {...rest} />
        </BoxBase>
    );
};

export default ListItemBase;
