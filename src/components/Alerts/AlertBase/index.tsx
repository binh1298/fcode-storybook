import React from "react";

import { Alert as MaterialAlert, AlertProps as MaterialAlertProps } from "@material-ui/lab";

export interface AlertBaseProps extends MaterialAlertProps {}

const AlertBase = React.forwardRef<unknown, AlertBaseProps>((props: AlertBaseProps, ref) => {
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
