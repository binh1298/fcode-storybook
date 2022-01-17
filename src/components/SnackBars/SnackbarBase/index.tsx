import {
    Snackbar as MaterialSnackbar,
    SnackbarProps as MaterialSnackbarProps,
} from "@mui/material";
import SlideBase from "src/components/Slide/SlideBase";

export interface SnackbarBaseProps extends MaterialSnackbarProps {}

const SnackbarBase = (props: SnackbarBaseProps) => {
    return <MaterialSnackbar TransitionComponent={SlideBase} {...props} />;
};

export default SnackbarBase;
