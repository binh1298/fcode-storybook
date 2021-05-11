import { CSSProperties } from "react";

import {
    List as MaterialList,
    ListProps as MaterialListProps,
    Box as MaterialBox,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

export interface ListBaseProps extends MaterialListProps {
    width?: number;
}

const ListBase = (props: ListBaseProps) => {
    const theme = useTheme();
    const { width = 260, ...rest } = props;
    let listBaseStyle: CSSProperties = {
        backgroundColor: theme.palette.primary.main,
        width: width,
    };

    return (
        <MaterialBox data-testid="muiBox" style={listBaseStyle}>
            <MaterialList {...rest} />
        </MaterialBox>
    );
};

export default ListBase;
