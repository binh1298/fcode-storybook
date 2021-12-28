import React from "react";

import { AlertProps as MaterialAlertProps } from "@mui/lab";
import { Alert as MaterialAlert } from "@mui/material";

export interface AlertBaseProps extends MaterialAlertProps {}

<<<<<<< HEAD
const AlertBase = (props: AlertBaseProps) => {
    return <MaterialAlert data-testid="AlertBase__root" {...props} />;
};
=======
const AlertBase = React.forwardRef((props: AlertBaseProps, ref: React.Ref<HTMLDivElement>) => {
    const { variant, ...rest } = props;
    return <MaterialAlert variant={variant || "filled"} {...rest} ref={ref} />;
});
>>>>>>> features/home-page

export default AlertBase;
