import {
    Typography as MaterialTypography,
    TypographyProps as MaterialTypographyProps,
} from "@material-ui/core";

export interface TypographyBaseProps extends MaterialTypographyProps {}

const TypographyBase = (props: TypographyBaseProps) => {
    return <MaterialTypography {...props} />;
};

export default TypographyBase;
