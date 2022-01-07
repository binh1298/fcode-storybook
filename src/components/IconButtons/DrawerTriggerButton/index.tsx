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
            sx={{ display: open ? "none" : "block", marginRight: "1rem", color: "inherit" }}
            data-testid="DrawerTriggerButton__root"
            edge="start"
            {...props}
        />
    );
};

export default DrawerTriggerButton;
