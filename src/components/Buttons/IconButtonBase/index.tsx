import React from "react";

import {
    IconButton as MaterialIconButton,
    IconButtonProps as MaterialIconButtonProps,
} from "@mui/material";

export interface IconButtonBaseProps extends MaterialIconButtonProps {}

const IconButtonBase = React.forwardRef(
    (props: IconButtonBaseProps, ref: React.Ref<HTMLButtonElement>) => {
        return <MaterialIconButton data-testid="IconButtonBase__root" {...props} ref={ref} />;
    }
);

export default IconButtonBase;
