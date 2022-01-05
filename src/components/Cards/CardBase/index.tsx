import { Card as MaterialCard, CardProps as MaterialCardProps } from "@mui/material";

export interface CardBaseProps extends MaterialCardProps {}

const CardBase = (props: CardBaseProps) => {
    return <MaterialCard {...props} />;
};

export default CardBase;
