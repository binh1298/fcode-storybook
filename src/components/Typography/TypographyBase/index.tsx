import {
    Typography as MaterialTypography,
    TypographyProps as MaterialTypographyProps,
} from "@material-ui/core";

import BoxBase from "../../Boxs/BoxBase";

export interface TypographyBaseProps extends MaterialTypographyProps {
    ml?: number | undefined;
    mr?: number | undefined;
    mt?: number | undefined;
    mb?: number | undefined;
    pl?: number | undefined;
    pr?: number | undefined;
    pt?: number | undefined;
    pb?: number | undefined;
    bgcolor?: "primary" | "secondary" | "info" | "error" | "warning" | "success";
}

const TypographyBase = (props: TypographyBaseProps) => {
    const { ml, mr, mt, mb, pl, pr, pt, pb, bgcolor, ...rest } = props;

    return (
        <BoxBase ml={ml} mr={mr} mt={mt} mb={mb} pl={pl} pr={pr} pt={pt} pb={pb} bgcolor={bgcolor}>
            <MaterialTypography {...rest} />
        </BoxBase>
    );
};

export default TypographyBase;
