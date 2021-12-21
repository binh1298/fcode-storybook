import React from "react";

import {
    Snackbar as MaterialSnackbar,
    SnackbarProps as MaterialSnackbarProps,
} from "@mui/material";

export interface SnackbarBaseProps extends MaterialSnackbarProps {}

const SnackbarBase = (props: SnackbarBaseProps) => {
    return <MaterialSnackbar {...props} />;
};

export default SnackbarBase;
