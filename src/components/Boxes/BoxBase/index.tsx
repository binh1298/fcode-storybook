import { Property } from "csstype";

import { Box as MaterialBox, BoxProps as MaterialBoxProps } from "@mui/material";

export interface BoxBaseProps extends MaterialBoxProps {
    display?: "flex" | "inline" | "block" | "inline-block";
    flexBasis?: number;
    flexDirection?: Property.FlexDirection;
    flexWrap?: Property.FlexWrap;
    justifyContent?:
        | "flex-start"
        | "flex-end"
        | "center"
        | "space-between"
        | "space-around"
        | "space-evenly"
        | "inital"
        | "inherit";
    alignItems?:
        | "stretch"
        | "center"
        | "flex-start"
        | "flex-end"
        | "baseline"
        | "initial"
        | "inherit";
    alignContent?:
        | "flex-start"
        | "flex-end"
        | "center"
        | "space-between"
        | "space-around"
        | "space-evenly"
        | "inital"
        | "inherit";
    order?: number;
    flexGrow?: number;
    flexShrink?: number;
    alignSelf?:
        | "stretch"
        | "center"
        | "flex-start"
        | "flex-end"
        | "baseline"
        | "initial"
        | "inherit";
    justifyItems?:
        | "auto"
        | "normal"
        | "start"
        | "end"
        | "flex-start"
        | "flex-end"
        | "self-start"
        | "self-end"
        | "center"
        | "left"
        | "right"
        | "baseline"
        | "initial"
        | "inherit"
        | "unset";
    justifySelf?:
        | "auto"
        | "normal"
        | "start"
        | "end"
        | "flex-start"
        | "flex-end"
        | "self-start"
        | "self-end"
        | "center"
        | "left"
        | "right"
        | "baseline"
        | "initial"
        | "inherit"
        | "unset";
    bgcolor?: "primary" | "secondary" | "info" | "error" | "warning" | "success" | "common";
    colorProps?: "main" | "light" | "dark";
    boxSizing?: Property.BoxSizing;
    m?: number;
    p?: number;
    mt?: number;
    mr?: number;
    mb?: number;
    ml?: number;
    pt?: number;
    pr?: number;
    pb?: number;
    pl?: number;
    width?: number;
    height?: number;
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    overrideColor?: "primary" | "secondary" | "info" | "error" | "warning" | "success";
    shouldHaveBorder?: boolean;
}

const BoxBase: React.FC<BoxBaseProps> = ({
    bgcolor,
    colorProps = "main",
    color,
    overrideColor,
    shouldHaveBorder,
    ...rest
}) => {
    let backgroundColor = undefined;
    if (bgcolor === "common") {
        color = "text.primary";
        backgroundColor = "background.default";
    } else if (bgcolor) {
        color = bgcolor + ".contrastText";
        backgroundColor = `${bgcolor}.${colorProps}`;
    } else {
        color = color || "text.primary";
    }
    if (overrideColor) {
        color = overrideColor + ".main";
    }
    if (shouldHaveBorder) {
        return (
            <MaterialBox
                bgcolor={backgroundColor}
                color={color}
                border="1px solid"
                borderColor="divider"
                borderRadius="0px"
                {...rest}
            />
        );
    } else {
        return <MaterialBox bgcolor={backgroundColor} color={color} {...rest} />;
    }
};

export default BoxBase;
