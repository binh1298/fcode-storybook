import {
    CardHeader as MaterialCardHeader,
    CardHeaderProps as MaterialCardHeaderProps,
} from "@mui/material";

export interface CardHeaderBaseProps extends MaterialCardHeaderProps {}

const CardHeaderBase = (props: CardHeaderBaseProps) => {
    return <MaterialCardHeader {...props} />;
};

export default CardHeaderBase;
