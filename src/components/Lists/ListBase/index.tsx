import { CSSProperties } from "react";

import { List as MaterialList, ListProps as MaterialListProps, useTheme } from "@material-ui/core";

import BoxBase from "../../Boxs/BoxBase";

export interface ListBaseProps extends MaterialListProps {
    width?: number;
}

const ListBase = (props: ListBaseProps) => {
    const { width = 260, ...rest } = props;
    const theme = useTheme();
    let listBaseStyle: CSSProperties = {
        width: width,
        backgroundColor: theme.palette.primary.main,
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    };

    return (
        <BoxBase data-testid="ListBase__root" style={listBaseStyle}>
            <MaterialList {...rest} />
        </BoxBase>
    );
};

export default ListBase;
