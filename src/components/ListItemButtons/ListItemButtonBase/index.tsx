import {
    ListItemButton as MaterialListItemButton,
    ListItemButtonProps as MaterialListItemButtonProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export interface ListItemButtonBaseProps extends MaterialListItemButtonProps {
    isHighlighted?: boolean;
}

const ListItemButton = styled(MaterialListItemButton, {
    shouldForwardProp: (prop) => prop !== "isHighlighted",
})<ListItemButtonBaseProps>(({ theme, isHighlighted }) => ({
    color: isHighlighted ? theme.palette.secondary.main : theme.palette.primary.contrastText,
    "&:hover": {
        backgroundColor: theme.palette.primary.main,
    },
}));

const ListItemButtonBase = (props: ListItemButtonBaseProps) => {
    const { isHighlighted, ...rest } = props;

    return (
        <ListItemButton
            isHighlighted={isHighlighted}
            data-testid="ListItemButtonBase__root"
            {...rest}
        />
    );
};

export default ListItemButtonBase;
