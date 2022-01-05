import {
    CssBaseline as MaterialCssBaseline,
    CssBaselineProps as MaterialCssBaselineProps,
} from "@mui/material";

export interface CssBaselineBaseProps extends MaterialCssBaselineProps {}

const CssBaselineBase = (props: CssBaselineBaseProps) => {
    return <MaterialCssBaseline {...props} />;
};

export default CssBaselineBase;
