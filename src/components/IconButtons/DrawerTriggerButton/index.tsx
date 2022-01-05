import {
    IconButton as MaterialIconButton,
    IconButtonProps as MaterialIconButtonProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export interface DrawerTriggerButtonProps extends MaterialIconButtonProps {
    open?: boolean;
}

const DrawerTrigger = styled(MaterialIconButton, {
    shouldForwardProp: (prop) => prop !== "open",
})<DrawerTriggerButtonProps>(({ open }) => {
    return {
        display: open ? "none" : "block",
        marginRight: "1rem",
    };
});

const DrawerTriggerButton = (props: DrawerTriggerButtonProps) => {
    return (
        <DrawerTrigger
            data-testid="DrawerTriggerButton__root"
            color="inherit"
            edge="start"
            {...props}
        />
    );
};

export default DrawerTriggerButton;
