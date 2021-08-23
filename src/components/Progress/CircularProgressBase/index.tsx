import {
    CircularProgress as MaterialCircularProgress,
    CircularProgressProps as MaterialCircularProgressProps,
} from "@material-ui/core";

export interface CircularProgressBaseProps extends MaterialCircularProgressProps {
    color?: "primary" | "secondary";
}

const CircularProgressBase = (props: CircularProgressBaseProps) => {
    const { color, ...rest } = props;

    return (
        <MaterialCircularProgress
            color={color ? color : "primary"}
            data-testid="CircularProgressBase__root"
            {...rest}
        />
    );
};

export default CircularProgressBase;
