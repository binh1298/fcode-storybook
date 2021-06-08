import { InputAdornment } from "@material-ui/core";
import TextFieldBase, { TexfieldBaseProps } from "src/components/Textfields/TextFieldBase";

export interface NormalTextFieldProps extends TexfieldBaseProps {
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
