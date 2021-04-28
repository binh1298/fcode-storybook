import { Button as MaterialButton, ButtonProps as MaterialButtonProps } from "@material-ui/core";
import { Add as AddIcon, Edit as EditIcon } from "@material-ui/icons";

export interface ButtonBaseProps extends MaterialButtonProps {}

const buttonStyle = {
    borderRadius: "50em",
};

const ButtonBase = (props: ButtonBaseProps) => {
    return (
        <MaterialButton
            {...props}
            style={buttonStyle}
            startIcon={props.color === "primary" ? <AddIcon /> : <EditIcon />}
        />
    );
};

export default ButtonBase;
