import { Button as MaterialButton, ButtonProps as MaterialButtonProps } from "@material-ui/core";

export interface ButtonBaseProps extends MaterialButtonProps {}

const buttonStyle = {
    borderRadius: "calc(1em + 6px)",
};

const ButtonBase = (props: ButtonBaseProps) => {
    return <MaterialButton {...props} style={buttonStyle} />;
};

export default ButtonBase;
