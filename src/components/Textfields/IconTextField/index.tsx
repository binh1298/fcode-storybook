import { InputAdornment } from "@material-ui/core";
import TextFieldBase, { TextfieldBaseProps } from "src/components/Textfields/TextFieldBase";

export interface IconTextFieldProps extends TextfieldBaseProps {
    icon?: React.ReactNode;
}

const IconTextField = (props: IconTextFieldProps) => {
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

export default IconTextField;
