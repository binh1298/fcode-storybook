import { ElementType } from "react";

import {
    Typography as MaterialTypography,
    TypographyProps as MaterialTypographyProps,
} from "@mui/material";

export interface TypographyBaseProps extends MaterialTypographyProps {
    component?: ElementType;
}

const TypographyBase = (props: TypographyBaseProps) => {
    return <MaterialTypography {...props} />;
};

export default TypographyBase;
