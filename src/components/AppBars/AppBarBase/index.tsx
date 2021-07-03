import { CSSProperties } from "react";

import { AppBar as MaterialAppBar, AppBarProps as MaterialAppBarProps } from "@material-ui/core";
import { useTheme } from "@material-ui/core";

import BoxBase from "../../Boxs/BoxBase";

export interface AppBarBaseProps extends MaterialAppBarProps {
    open?: boolean;
    width?: number;
}

const AppBarBase = (props: AppBarBaseProps) => {
    const { open, width } = props;
    const theme = useTheme();
    let AppBarBaseStyle: CSSProperties = {};

    let drawerWidth: number = 360;
    if (width) {
        drawerWidth = width;
    }

    AppBarBaseStyle = {
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
    };

    if (open) {
        AppBarBaseStyle.marginLeft = drawerWidth;
        AppBarBaseStyle.width = `calc(100% - ${drawerWidth}px)`;
        AppBarBaseStyle.transition = theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        });
    }

    return (
        <BoxBase style={AppBarBaseStyle} data-testid="AppBarBase__box">
            <MaterialAppBar position="relative" {...props} />
        </BoxBase>
    );
};

export default AppBarBase;
