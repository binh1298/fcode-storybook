import clsx from "clsx";

import { AppBar as MaterialAppBar, AppBarProps as MaterialAppBarProps } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

import BoxBase from "../../Boxes/BoxBase";

export interface AppBarBaseProps extends MaterialAppBarProps {
    open?: boolean;
    width?: number;
}

let drawerWidth: number = 360;

//@kien123456k please help me refactor this to use "@mui/material/styles" instead
const useStyles = makeStyles((theme) => ({
    appBar: {
        position: "fixed",
        width: "100%",
        top: 0,
        left: "auto",
        right: 0,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
}));

const AppBarBase = (props: AppBarBaseProps) => {
    const { open, width, ...rest } = props;

    if (width) {
        drawerWidth = width;
    }

    const classes = useStyles();

    return (
        <BoxBase
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
            data-testid="AppBarBase__box"
        >
            <MaterialAppBar position="relative" {...rest} />
        </BoxBase>
    );
};

export default AppBarBase;
