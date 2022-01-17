import {
    CardActions as MaterialCardActions,
    CardActionsProps as MaterialCardActionsProps,
} from "@mui/material";

export interface CardActionsBaseProps extends MaterialCardActionsProps {}

const CardActionsBase = (props: CardActionsBaseProps) => {
    return <MaterialCardActions {...props} />;
};

export default CardActionsBase;
