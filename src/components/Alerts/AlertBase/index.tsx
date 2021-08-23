import React from "react";

import { Alert as MaterialAlert, AlertProps as MaterialAlertProps } from "@material-ui/lab";

export interface AlertBaseProps extends MaterialAlertProps {}

const AlertBase = React.forwardRef(function AlertBase(props: AlertBaseProps, ref) {
    return <MaterialAlert {...props} ref={ref} />;
});

export default AlertBase;
