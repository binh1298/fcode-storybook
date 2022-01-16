import React from "react";

import { AlertProps as MaterialAlertProps } from "@mui/lab";
import { Alert as MaterialAlert } from "@mui/material";

export interface AlertBaseProps extends MaterialAlertProps {}

const AlertBase = React.forwardRef((props: AlertBaseProps, ref: React.Ref<HTMLDivElement>) => {
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
