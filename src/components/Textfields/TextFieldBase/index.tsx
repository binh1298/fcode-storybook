import {
    TextField as MaterialTextField,
    BaseTextFieldProps as MaterialTextFieldProps,
    makeStyles,
    Theme,
} from "@material-ui/core";

export interface TexfieldBaseProps extends MaterialTextFieldProps {
    label: string;
    name?: string;
    type?: string;
    disabled?: boolean;
    autoFocus?: boolean;
    fullWidth?: boolean;
    errorMessage?: string;
    inputRef?: React.RefObject<HTMLInputElement>;
    color: "primary" | "secondary";
}

interface Color {
    color: "primary" | "secondary" | "error";
}

const useStyles = makeStyles<Theme, Color>((theme) => ({
    cssLabel: {
        color: ({ color }) => theme.palette[color].main,
    },
    root: {
        "& label.Mui-focused": {
            color: ({ color }) => theme.palette[color].main,
        },
        "& .MuiInput-underline:before": {
            borderBottomColor: ({ color }) => theme.palette[color].main,
        },
        "& .MuiInput-underline:hover:before": {
            borderBottomColor: ({ color }) => theme.palette[color].main,
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: ({ color }) => theme.palette[color].main,
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: ({ color }) => theme.palette[color].main,
            },
            "&:hover fieldset": {
                borderColor: ({ color }) => theme.palette[color].main,
            },
            "&.Mui-focused fieldset": {
                borderColor: ({ color }) => theme.palette[color].main,
            },
        },
        "& .MuiFilledInput-underline:before": {
            borderColor: ({ color }) => theme.palette[color].main,
        },
        "& .MuiFilledInput-underline:hover:before": {
            borderColor: ({ color }) => theme.palette[color].main,
        },
        "& .MuiFilledInput-underline:after": {
            borderColor: ({ color }) => theme.palette[color].main,
        },
        "& .Mui-error": {
            color: theme.palette.error.main,
        },
        "& .MuiFormHelperText-root": {
            color: theme.palette.error.main,
        },
    },
    error: {},
}));

const TextFieldBase = (props: TexfieldBaseProps) => {
    const { color, errorMessage, ...rest } = props;

    const isNotError =
        typeof errorMessage === undefined ||
        errorMessage === null ||
        errorMessage === undefined ||
        errorMessage === "";

    const classes = useStyles({ color: isNotError ? color : "error" });

    return (
        <MaterialTextField
            className={classes.root}
            {...rest}
            error={!isNotError}
            helperText={errorMessage}
            InputLabelProps={{ classes: { root: classes.cssLabel } }}
        />
    );
};

export default TextFieldBase;
