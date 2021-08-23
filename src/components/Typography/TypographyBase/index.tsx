import { ElementType } from "react";

import {
    Typography as MaterialTypography,
    TypographyProps as MaterialTypographyProps,
} from "@material-ui/core";

export interface TypographyBaseProps extends MaterialTypographyProps {
    component?: ElementType<any>;
}

const TypographyBase = (props: TypographyBaseProps) => {
    return <MaterialTypography {...props} />;
};

export default TypographyBase;
