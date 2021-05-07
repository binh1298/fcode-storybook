import {
    Avatar as MaterialAvatar,
    AvatarProps as MaterialAvatarProps,
    Box as MaterialBox,
} from "@material-ui/core";

export interface AvatarBaseProps extends MaterialAvatarProps {
    size?: "small" | "large" | undefined;
}

const avatarStyle = {
    width: "inherit",
    height: "inherit",
};

const AvatarBase = (props: AvatarBaseProps) => {
    let width: number, height: number;
    switch (props.size) {
        case "small":
            width = 24;
            height = 24;
            break;
        case "large":
            width = 56;
            height = 56;
            break;
        default:
            width = 36;
            height = 36;
    }

    return (
        <MaterialBox
            width={width}
            height={height}
            borderRadius="50%"
            borderColor="primary.light"
            border={1}
        >
            <MaterialAvatar {...props} style={avatarStyle} />
        </MaterialBox>
    );
};

export default AvatarBase;
