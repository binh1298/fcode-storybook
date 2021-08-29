import { CSSProperties } from "react";

import {
    Divider as MaterialDivider,
    DividerProps as MaterialDividerProps,
    useTheme,
} from "@material-ui/core";

export interface DividerBaseProps extends MaterialDividerProps {
    isHighlighted?: boolean;
}

const DividerBase = (props: DividerBaseProps) => {
    const theme = useTheme();
    const { isHighlighted, ...rest } = props;
    let DividerBaseStyle: CSSProperties = {};

    if (isHighlighted) {
        DividerBaseStyle.backgroundColor = theme.palette.secondary.main;
    } else {
        DividerBaseStyle.backgroundColor = theme.palette.common.white;
    }

    return <MaterialDivider data-testid="DividerBase__root" style={DividerBaseStyle} {...rest} />;
};

export default DividerBase;
