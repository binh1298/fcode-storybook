import { CSSProperties } from "react";

import { Drawer as MaterialDrawer, DrawerProps as MaterialDrawerProps } from "@material-ui/core";
import { useTheme } from "@material-ui/core";

import BoxBase from "../../Boxs/BoxBase";

export interface DrawerBaseProps extends MaterialDrawerProps {
    open?: boolean;
    width?: number;
}

const DrawerBase = (props: DrawerBaseProps) => {
    const theme = useTheme();
    const { open, width } = props;
    let drawerBaseStyle: CSSProperties = {};
    let drawerPaperStyle: CSSProperties = {};

    let drawerWidth: number = 360;
    if (width) {
        drawerWidth = width;
    }

    drawerBaseStyle = {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
    };
    if (open) {
        drawerBaseStyle = {
            ...drawerBaseStyle,
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        };
    } else {
        drawerBaseStyle = {
            ...drawerBaseStyle,
            width: theme.spacing(9),
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        };
    }

    drawerPaperStyle = {
        width: drawerWidth,
        backgroundColor: theme.palette.primary.main,
    };
    if (open) {
        drawerPaperStyle = {
            ...drawerPaperStyle,
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        };
    } else {
        drawerPaperStyle = {
            ...drawerPaperStyle,
            width: theme.spacing(9),
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        };
    }

    return (
        <BoxBase style={drawerBaseStyle}>
            <MaterialDrawer
                PaperProps={{
                    style: drawerPaperStyle,
                }}
                {...props}
            />
        </BoxBase>
    );
};

export default DrawerBase;
