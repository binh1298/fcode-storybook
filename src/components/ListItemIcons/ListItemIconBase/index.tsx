import {
    ListItemIcon as MaterialListItemIcon,
    ListItemIconProps as MaterialListItemIconProps,
} from "@material-ui/core";

import BoxBase from "../../Boxs/BoxBase";

export interface ListItemIconBaseProps extends MaterialListItemIconProps {
    color?: "primary" | "secondary";
    bgcolor?: "primary" | "secondary";
    width?: number | undefined;
    height?: number | undefined;
    pl?: number | undefined;
    pr?: number | undefined;
    pt?: number | undefined;
    pb?: number | undefined;
    ml?: number | undefined;
    mr?: number | undefined;
    mt?: number | undefined;
    mb?: number | undefined;
}

const ListItemIconBase = (props: ListItemIconBaseProps) => {
    const {
        children,
        color,
        bgcolor,
        width,
        height,
        pl,
        pr,
        pt,
        pb,
        ml,
        mr,
        mt,
        mb,
        ...rest
    } = props;

    return (
        <BoxBase
            width={width}
            height={height}
            pl={pl}
            pr={pr}
            pt={pt}
            pb={pb}
            ml={ml}
            mr={mr}
            mt={mt}
            mb={mb}
        >
            <MaterialListItemIcon {...rest}>
                <BoxBase
                    data-testid="ListItemIconBase__root"
                    bgcolor={bgcolor}
                    overrideColor={color}
                >
                    {children}
                </BoxBase>
            </MaterialListItemIcon>
        </BoxBase>
    );
};

export default ListItemIconBase;
