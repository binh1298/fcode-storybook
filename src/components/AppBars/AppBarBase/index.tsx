import { AppBar as MaterialAppBar, AppBarProps as MaterialAppBarProps } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export interface AppBarBaseProps extends MaterialAppBarProps {
    open?: boolean;
    width?: number;
}

const defaultDrawerWidth: number = 360;

const AppBarBase = (props: AppBarBaseProps) => {
    const { open, width } = props;
    const theme = useTheme();
    const drawerWidth: number = width ? width : defaultDrawerWidth;

    return (
        <MaterialAppBar
            sx={{
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
            }}
            data-testid="AppBarBase__root"
            {...props}
        />
    );
};

export default AppBarBase;
