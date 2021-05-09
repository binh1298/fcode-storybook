import { Box as MaterialBox, BoxProps as MaterialBoxProps } from "@material-ui/core";

export interface BoxBaseProps extends MaterialBoxProps {
    display?: "flex" | "inline" | "block" | "inline-block";
    flexBasis?: number;
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" | "initial" | "inherit";
    flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | "initial" | "inherit";
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
    bgcolor?: "primary" | "secondary" | "info" | "error" | "warning" | "success";
    colorProps?: "main" | "light" | "dark";
    boxSizing?: "content-box" | "border-box";
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
}

const BoxBase: React.FC<BoxBaseProps> = ({ bgcolor, colorProps = "main", color, ...rest }) => {
    let backgroundColor = "background.default";
    if (bgcolor) {
        color = bgcolor + ".contrastText";
        backgroundColor = `${bgcolor}.${colorProps}`;
    } else {
        color = "text.primary";
    }
    return <MaterialBox bgcolor={backgroundColor} color={color} {...rest} />;
};

export default BoxBase;
