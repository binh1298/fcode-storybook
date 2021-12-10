import {
    ListItemIcon as MaterialListItemIcon,
    ListItemIconProps as MaterialListItemIconProps,
} from "@mui/material";

export interface ListItemIconBaseProps extends MaterialListItemIconProps {}

const ListItemIconBase = (props: ListItemIconBaseProps) => {
    return <MaterialListItemIcon sx={{ color: "inherit" }} {...props} />;
};

export default ListItemIconBase;
