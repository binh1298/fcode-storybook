import React from "react";

import { AlertProps as MaterialAlertProps } from "@mui/lab";
import { Alert as MaterialAlert } from "@mui/material";

export interface AlertBaseProps extends MaterialAlertProps {}

const AlertBase = React.forwardRef<HTMLDivElement, AlertBaseProps>((props, ref) => {
    const { variant, ...rest } = props;
    return (
        <MaterialAlert
            data-testid="AlertBase__root"
            variant={variant || "filled"}
            {...rest}
            ref={ref}
        />
    );
});

export default AlertBase;
