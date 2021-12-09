import { AppBar as MaterialAppBar, AppBarProps as MaterialAppBarProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export interface AppBarBaseProps extends MaterialAppBarProps {
    open?: boolean;
    width?: number;
}

const defaultDrawerWidth: number = 360;

const AppBar = styled(MaterialAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})<AppBarBaseProps>(({ theme, width, open }) => {
    const drawerWidth: number = width ? width : defaultDrawerWidth;

    return {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    };
});

const AppBarBase = (props: AppBarBaseProps) => {
    return <AppBar data-testid="AppBarBase__root" {...props} />;
};

export default AppBarBase;
