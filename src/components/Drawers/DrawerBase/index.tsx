import { Drawer as MaterialDrawer, DrawerProps as MaterialDrawerProps } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

export interface DrawerBaseProps extends MaterialDrawerProps {
    open?: boolean;
    width?: number;
}

let drawerWidth: number = 360;

const openedMixin = (theme: Theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
});

const closedMixin = (theme: Theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    width: `calc(${theme.spacing(8)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const Drawer = styled(MaterialDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})<DrawerBaseProps>(({ theme, width, open }) => {
    drawerWidth = width ? width : drawerWidth;

    return {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        overflowX: "hidden",
        ...(open && {
            ...openedMixin(theme),
            "& .MuiDrawer-paper": {
                ...openedMixin(theme),
                backgroundColor: theme.palette.primary.main,
                overflowX: "hidden",
            },
        }),
        ...(!open && {
            ...closedMixin(theme),
            "& .MuiDrawer-paper": {
                ...closedMixin(theme),
                backgroundColor: theme.palette.primary.main,
                overflowX: "hidden",
            },
        }),
    };
});

const DrawerBase = (props: DrawerBaseProps) => {
    return <Drawer data-testid="DrawerBase__root" {...props} />;
};

export default DrawerBase;
