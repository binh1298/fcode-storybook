import { Button as MaterialButton, ButtonProps as MaterialButtonProps } from "@material-ui/core";

import BoxBase from "../../Boxs/BoxBase";

export interface ButtonBaseProps extends MaterialButtonProps {
    pl?: number | undefined;
    pr?: number | undefined;
    pt?: number | undefined;
    pb?: number | undefined;
}

const buttonStyle = {
    borderRadius: "calc(1rem + 6px)",
};

const ButtonBase = (props: ButtonBaseProps) => {
    const { pl, pr, pt, pb, ...rest } = props;

    return (
        <BoxBase pl={pl} pr={pr} pt={pt} pb={pb}>
            <MaterialButton {...rest} style={buttonStyle} />
        </BoxBase>
    );
};

export default ButtonBase;
