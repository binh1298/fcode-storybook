import {
    IconButton as MaterialIconButton,
    IconButtonProps as MaterialIconButtonProps,
} from "@mui/material";

export interface DrawerTriggerButtonProps extends MaterialIconButtonProps {
    open?: boolean;
}

const DrawerTriggerButton = (props: DrawerTriggerButtonProps) => {
    const { open } = props;

    return (
        <MaterialIconButton
            color="inherit"
            edge="start"
            sx={{ display: open ? "none" : "block", marginRight: "1rem" }}
            data-testid="DrawerTriggerButton__root"
            {...props}
        />
    );
};

export default DrawerTriggerButton;
