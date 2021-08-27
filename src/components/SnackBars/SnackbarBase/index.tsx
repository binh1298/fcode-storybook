import {
    Snackbar as MaterialSnackbar,
    SnackbarProps as MaterialSnackbarProps,
} from "@material-ui/core";
import SlideBase from "src/components/Slide/SlideBase";

export interface SnackbarBaseProps extends MaterialSnackbarProps {}

const SnackbarBase = (props: SnackbarBaseProps) => {
    return <MaterialSnackbar TransitionComponent={SlideBase} {...props} />;
};

export default SnackbarBase;
