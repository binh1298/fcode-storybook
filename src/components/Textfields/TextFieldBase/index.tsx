import {
    TextField as MaterialTextField,
    BaseTextFieldProps as MaterialTextFieldProps,
} from "@material-ui/core";

export interface TexfieldBaseProps extends MaterialTextFieldProps {
    label?: string;
    name?: string;
    required?: boolean;
    type?: string;
    disabled?: boolean;
    helperText?: string;
    autoFocus?: boolean;
    fullWidth?: boolean;
    error?: boolean;
    inputRef?: React.RefObject<HTMLInputElement>;
}

const TextFieldBase = (props: TexfieldBaseProps) => {
    return <MaterialTextField {...props} />;
};

export default TextFieldBase;
