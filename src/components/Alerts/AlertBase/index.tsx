import { AlertProps as MaterialAlertProps } from "@mui/lab";
import { Alert as MaterialAlert } from "@mui/material";

export interface AlertBaseProps extends MaterialAlertProps {}

const AlertBase = (props: AlertBaseProps) => {
    return <MaterialAlert data-testid="AlertBase__root" {...props} />;
};

export default AlertBase;
