import {
    ListItemButton as MaterialListItemButton,
    ListItemButtonProps as MaterialListItemButtonProps,
} from "@mui/material";

export interface ListItemButtonBaseProps extends MaterialListItemButtonProps {
    isHighlighted?: boolean;
}

const ListItemButtonBase = (props: ListItemButtonBaseProps) => {
    const { isHighlighted, ...rest } = props;

    return (
        <MaterialListItemButton
            sx={{
                color: isHighlighted ? "secondary.main" : "primary.contrastText",
                "&:hover": {
                    backgroundColor: "primary.light",
                },
            }}
            data-testid="ListItemButtonBase__root"
            {...rest}
        />
    );
};

export default ListItemButtonBase;
