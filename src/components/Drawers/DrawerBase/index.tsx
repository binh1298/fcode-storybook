import { Drawer as MaterialDrawer, DrawerProps as MaterialDrawerProps } from "@material-ui/core";

export interface DrawerBaseProps extends MaterialDrawerProps {}

const DrawerBase = (props: DrawerBaseProps) => {
    return <MaterialDrawer {...props} />;
};

export default DrawerBase;
