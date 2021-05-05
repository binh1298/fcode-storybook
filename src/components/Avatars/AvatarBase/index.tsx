import {
    Avatar as MaterialAvatar,
    AvatarProps as MaterialAvatarProps,
    Box as MaterialBox,
} from "@material-ui/core";

export interface AvatarBaseProps extends MaterialAvatarProps {}

const avatarStyle = {
    width: "inherit",
    height: "inherit",
};

const AvatarBase = (props: AvatarBaseProps) => {
    return (
        <MaterialBox
            width={36}
            height={36}
            borderRadius="50%"
            borderColor="primary.light"
            border={1}
        >
            <MaterialAvatar {...props} style={avatarStyle} />
        </MaterialBox>
    );
};

export default AvatarBase;
