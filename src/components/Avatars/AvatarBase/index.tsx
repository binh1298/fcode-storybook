import { Avatar as MaterialAvatar, AvatarProps as MaterialAvatarProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export interface AvatarBaseProps extends MaterialAvatarProps {
    size?: "small" | "medium" | "large" | undefined;
}

const Avatar = styled(MaterialAvatar, {
    shouldForwardProp: (prop) => prop !== "size",
})<AvatarBaseProps>(({ theme, size }) => {
    let width: number;

    switch (size) {
        case "small":
            width = 24;
            break;
        case "medium":
            width = 36;
            break;
        case "large":
            width = 56;
            break;
        default:
            width = 36;
    }

    return {
        width,
        height: width,
        borderWidth: "1px",
        borderColor: theme.palette.primary.light,
    };
});

const AvatarBase = (props: AvatarBaseProps) => {
    return <Avatar data-testid="AvatarBase_root" {...props} />;
};

export default AvatarBase;
