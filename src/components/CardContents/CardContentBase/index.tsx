import {
    CardContent as MaterialCardContent,
    CardContentProps as MaterialCardContentProps,
} from "@mui/material";

export interface CardContentBaseProps extends MaterialCardContentProps {}

const CardContentBase = (props: CardContentBaseProps) => {
    return <MaterialCardContent {...props} />;
};

export default CardContentBase;
