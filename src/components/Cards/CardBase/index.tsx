import { Card as MaterialCard, CardProps as MaterialCardProps } from "@material-ui/core";

export interface CardBaseProps extends MaterialCardProps {}

const CardBase = (props: CardBaseProps) => {
    return <MaterialCard {...props} />;
};

export default CardBase;
