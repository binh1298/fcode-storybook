import {
    ListItemIcon as MaterialListItemIcon,
    ListItemIconProps as MaterialListItemIconProps,
} from "@material-ui/core";

export interface ListItemIconBaseProps extends MaterialListItemIconProps {}

const ListItemIconBase = (props: ListItemIconBaseProps) => {
    return <MaterialListItemIcon style={{ color: "inherit" }} {...props} />;
};

export default ListItemIconBase;
