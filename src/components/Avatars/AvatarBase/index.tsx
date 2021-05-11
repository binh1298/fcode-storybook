import { CSSProperties } from "react";

import {
    Avatar as MaterialAvatar,
    AvatarProps as MaterialAvatarProps,
    Box as MaterialBox,
    useTheme,
} from "@material-ui/core";

export interface AvatarBaseProps extends MaterialAvatarProps {
    size?: "small" | "medium" | "large" | undefined;
}

const avatarStyle = {
    width: "inherit",
    height: "inherit",
};

const AvatarBase = (props: AvatarBaseProps) => {
    const theme = useTheme();
    let avatarBaseStyle: CSSProperties = {
        borderRadius: "50%",
        borderColor: theme.palette.primary.light,
        borderWidth: "1px",
    };
    switch (props.size) {
        case "small":
            avatarBaseStyle.width = 24;
            break;
        case "medium":
            avatarBaseStyle.width = 36;
            break;
        case "large":
            avatarBaseStyle.width = 56;
            break;
        default:
            avatarBaseStyle.width = 36;
    }

    return (
        <MaterialBox data-testid="muiBox" style={avatarBaseStyle}>
            <MaterialAvatar data-testid="muiAvatar" {...props} style={avatarStyle} />
        </MaterialBox>
    );
};

export default AvatarBase;
