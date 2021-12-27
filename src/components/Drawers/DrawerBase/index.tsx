import clsx from "clsx";

import { Drawer as MaterialDrawer, DrawerProps as MaterialDrawerProps } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

import BoxBase from "../../Boxes/BoxBase";

export interface DrawerBaseProps extends MaterialDrawerProps {
    open?: boolean;
    width?: number;
}

let drawerWidth: number = 360;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        width: theme.spacing(8),
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    paper: {
        background: theme.palette.primary.main,
    },
}));

const DrawerBase = (props: DrawerBaseProps) => {
    const { open, width, ...rest } = props;

    if (width) {
        drawerWidth = width;
    }

    const classes = useStyles();

    return (
        <BoxBase
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            data-testid="DrawerBase__box"
        >
            <MaterialDrawer
                classes={{
                    paper: clsx(classes.paper, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
                data-testid="DrawerBase__root"
                {...rest}
            />
        </BoxBase>
    );
};

export default DrawerBase;
