import { ReactNode } from "react";
import React from "react";

import { Button as MaterialButton, ButtonProps as MaterialButtonProps } from "@mui/material";
import CircularProgressBase from "src/components/Progress/CircularProgressBase";

export interface ButtonBaseProps extends MaterialButtonProps {
    isLoading?: boolean;
}

const buttonStyle = {
    borderRadius: "calc(1rem + 6px)",
};

const ButtonBase = React.forwardRef((props: ButtonBaseProps, ref: React.Ref<HTMLButtonElement>) => {
    const { isLoading, color, startIcon, size, disabled, ...rest } = props;
    const circularProgressBaseColor = color === "primary" ? "secondary" : "primary";
    let startButtonIcon: JSX.Element | ReactNode;

    let circularProgressBaseSize: number;
    switch (size) {
        case "small":
            circularProgressBaseSize = 20;
            break;
        case "medium":
            circularProgressBaseSize = 24;
            break;
        case "large":
            circularProgressBaseSize = 28;
            break;
        default:
            circularProgressBaseSize = 24;
            break;
    }

    if (isLoading) {
        startButtonIcon = (
            <CircularProgressBase
                size={circularProgressBaseSize}
                color={circularProgressBaseColor}
            />
        );
    } else {
        startButtonIcon = startIcon;
    }
    const buttonBaseDisabled = disabled || isLoading;

    return (
        <MaterialButton
            startIcon={startButtonIcon}
            color={color}
            style={buttonStyle}
            disabled={buttonBaseDisabled}
            {...rest}
            data-testid="ButtonBase__root"
            ref={ref}
        />
    );
});

export default ButtonBase;
