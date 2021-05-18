import {
    ListItemIcon as MaterialListItemIcon,
    ListItemIconProps as MaterialListItemIconProps,
} from "@material-ui/core";

import BoxBase from "../../Boxs/BoxBase";

export interface ListItemIconBaseProps extends MaterialListItemIconProps {
    color?: "primary" | "secondary";
    bgColor?: "primary" | "secondary";
}

const ListItemIconBase = (props: ListItemIconBaseProps) => {
    const { children, color, bgColor, ...rest } = props;

    return (
        <BoxBase ml={3}>
            <MaterialListItemIcon {...rest}>
                <BoxBase
                    data-testid="ListItemIconBase__root"
                    bgcolor={bgColor}
                    overrideColor={color}
                >
                    {children}
                </BoxBase>
            </MaterialListItemIcon>
        </BoxBase>
    );
};

export default ListItemIconBase;
