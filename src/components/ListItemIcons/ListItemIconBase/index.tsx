import {
    ListItemIcon as MaterialListItemIcon,
    ListItemIconProps as MaterialListItemIconProps,
} from "@material-ui/core";

import BoxBase from "../../Boxs/BoxBase";

export interface ListItemIconBaseProps extends MaterialListItemIconProps {
    color?: "primary" | "secondary";
    bgcolor?: "primary" | "secondary";
}

const ListItemIconBase = (props: ListItemIconBaseProps) => {
    const { children, color, bgcolor, ...rest } = props;

    return (
        <MaterialListItemIcon {...rest}>
            <BoxBase data-testid="ListItemIconBase__root" bgcolor={bgcolor} overrideColor={color}>
                {children}
            </BoxBase>
        </MaterialListItemIcon>
    );
};

export default ListItemIconBase;
