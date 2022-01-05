import {
    CircularProgress as MaterialCircularProgress,
    CircularProgressProps as MaterialCircularProgressProps,
} from "@mui/material";

export interface CircularProgressBaseProps extends MaterialCircularProgressProps {}

const CircularProgressBase = (props: CircularProgressBaseProps) => {
    return <MaterialCircularProgress data-testid="CircularProgressBase__root" {...props} />;
};

export default CircularProgressBase;
