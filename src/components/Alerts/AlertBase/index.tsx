import { AlertProps as MaterialAlertProps } from "@mui/lab";
import { Alert as MaterialAlert } from "@mui/material";

export interface AlertBaseProps extends MaterialAlertProps {}

const AlertBase = (props: AlertBaseProps) => {
    return <MaterialAlert {...props} />;
};

export default AlertBase;
