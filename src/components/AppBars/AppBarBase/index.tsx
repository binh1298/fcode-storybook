import { AppBar as MaterialAppBar, AppBarProps as MaterialAppBarProps } from "@material-ui/core";

export interface AppBarBaseProps extends MaterialAppBarProps {}

const AppBarBase = (props: AppBarBaseProps) => {
    return <MaterialAppBar {...props} />;
};

export default AppBarBase;
