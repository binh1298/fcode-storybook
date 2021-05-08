import {
    ListItemIcon as MaterialListItemIcon,
    ListItemIconProps as MaterialListItemIconProps,
    Box as MaterialBox,
} from "@material-ui/core";

export interface ListItemIconBaseProps extends MaterialListItemIconProps {}

const ListItemIconBase = (props: ListItemIconBaseProps) => {
    return (
        <MaterialBox ml={3}>
            <MaterialListItemIcon {...props}>
                <MaterialBox color="primary.contrastText" bgcolor="primary.main">
                    {props.children}
                </MaterialBox>
            </MaterialListItemIcon>
        </MaterialBox>
    );
};

export default ListItemIconBase;
