import { InputAdornment } from "@material-ui/core";
import TextFieldBase, { TextfieldBaseProps } from "src/components/Textfields/TextFieldBase";

export interface NormalTextFieldProps extends TextfieldBaseProps {
    icon?: React.ReactNode;
}

const NormalTextField = (props: NormalTextFieldProps) => {
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

export default NormalTextField;
