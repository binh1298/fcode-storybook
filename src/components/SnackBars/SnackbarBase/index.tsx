import {
    Snackbar as MaterialSnackbar,
    SnackbarProps as MaterialSnackbarProps,
} from "@material-ui/core";

export interface SnackbarBaseProps extends MaterialSnackbarProps {}

const SnackbarBase = (props: SnackbarBaseProps) => {
    return <MaterialSnackbar {...props} />;
};

export default SnackbarBase;
