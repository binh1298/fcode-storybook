import { ChangeEventHandler } from "react";

import {
    TextField as MaterialTextField,
    BaseTextFieldProps as MaterialTextFieldProps,
    makeStyles,
    Theme,
    OutlinedInputProps,
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
    InputProps?: Partial<OutlinedInputProps>;
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

interface Color {
    color: "primary" | "error";
}

const useStyles = makeStyles<Theme, Color>((theme) => ({
    cssLabel: {
        color: ({ color }) => theme.palette[color].main,
    },
    fontColor: {
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
    const { errorMessage, InputLabelProps, InputProps, ...rest } = props;

    const classes = useStyles({ color: !errorMessage ? "primary" : "error" });

    return (
        <MaterialTextField
            className={classes.root}
            error={Boolean(errorMessage)}
            helperText={errorMessage}
            InputLabelProps={{ ...InputLabelProps, classes: { root: classes.cssLabel } }}
            InputProps={{ ...InputProps, className: classes.fontColor }}
            {...rest}
        />
    );
};

export default TextFieldBase;
