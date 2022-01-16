import {
    ButtonGroup as MaterialButtonGroup,
    ButtonGroupProps as MaterialButtonGroupProps,
} from "@mui/material";

export interface ButtonGroupBaseProps extends MaterialButtonGroupProps {}

const ButtonGroupBase = (props: ButtonGroupBaseProps) => {
    return <MaterialButtonGroup {...props} />;
};

export default ButtonGroupBase;
