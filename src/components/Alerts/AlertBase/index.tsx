import React from "react";

import { Alert as MaterialAlert, AlertProps as MaterialAlertProps } from "@material-ui/lab";

export interface AlertBaseProps extends MaterialAlertProps {}

const AlertBase = (props: AlertBaseProps) => {
    return <MaterialAlert {...props} />;
};

export default AlertBase;
