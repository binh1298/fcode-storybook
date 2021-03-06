import { InputAdornment } from "@mui/material";
import TextFieldBase, { TextfieldBaseProps } from "src/components/Textfields/TextFieldBase";

export interface IconTextFieldProps extends TextfieldBaseProps {
    icon?: React.ReactNode;
}

const LoginTextField = (props: IconTextFieldProps) => {
    const { icon } = props;
    return (
        <TextFieldBase
            {...props}
            InputProps={{
                startAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
                style: { fontSize: "1rem" },
            }}
            InputLabelProps={{ style: { fontSize: "1rem" } }}
        />
    );
};

export default LoginTextField;
