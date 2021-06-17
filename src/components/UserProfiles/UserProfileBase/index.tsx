import {
    ArrowLeft as ArrowLeftIcon,
    Settings as SettingsIcon,
    ExitToApp as ExitToAppIcon,
    Edit as EditIcon,
} from "@material-ui/icons";
import AvatarBase from "src/components/Avatars/AvatarBase";
import BoxBase, { BoxBaseProps } from "src/components/Boxs/BoxBase";
import ButtonBase from "src/components/Buttons/ButtonBase";
import DividerBase from "src/components/Dividers/DividerBase";
import TypographyBase from "src/components/Typography/TypographyBase";

const replyLogoSource =
    "https://res.cloudinary.com/dq7l8216n/image/upload/v1621347887/Reply_Logo.png";
const fcodeAvatarSource =
    "https://res.cloudinary.com/dq7l8216n/image/upload/v1620235303/FCode-Avatar.png";

export interface UserProfileBaseProps extends BoxBaseProps {
    variant?: "logged-in" | "logged-out";
}

const UserProfileBase = (props: UserProfileBaseProps) => {
    const { variant, ...rest } = props;

    let userProfileLoggedIn: JSX.Element = (
        <BoxBase {...rest}>
            <BoxBase
                display="flex"
                justifyContent="space-between"
                bgcolor="primary"
                px={3}
                pt={3}
                pb={2}
            >
                <BoxBase display="flex" bgcolor="primary">
                    <ArrowLeftIcon />
                    <AvatarBase variant="square" src={replyLogoSource} />
                    <BoxBase bgcolor="primary" px={1}>
                        <TypographyBase variant="h6">REPLY</TypographyBase>
                    </BoxBase>
                </BoxBase>

                <BoxBase display="flex" justifyContent="flex-end" bgcolor="primary">
                    <BoxBase bgcolor="primary" px={2}>
                        <AvatarBase src={fcodeAvatarSource} />
                    </BoxBase>
                    <SettingsIcon />
                </BoxBase>
            </BoxBase>
            <BoxBase bgcolor="primary" textAlign="center">
                <ButtonBase
                    color="secondary"
                    variant="contained"
                    startIcon={
                        <TypographyBase variant="h6">
                            <EditIcon />
                        </TypographyBase>
                    }
                >
                    <TypographyBase variant="h5">Compose</TypographyBase>
                </ButtonBase>
            </BoxBase>
        </BoxBase>
    );

    let userProfileLoggedOut: JSX.Element = (
        <BoxBase {...rest}>
            <BoxBase display="flex" bgcolor="primary" pt={3} pb={2} px={3}>
                <ArrowLeftIcon />
                <AvatarBase variant="square" src={replyLogoSource} />
                <BoxBase bgcolor="primary" px={1}>
                    <TypographyBase variant="h6">REPLY</TypographyBase>
                </BoxBase>
            </BoxBase>

            <BoxBase bgcolor="primary" textAlign="center">
                <TypographyBase variant="body1">WELCOME TO OUR APP</TypographyBase>
                <BoxBase px={2}>
                    <DividerBase />
                </BoxBase>
                <BoxBase py={2}>
                    <ButtonBase
                        color="secondary"
                        variant="contained"
                        startIcon={
                            <TypographyBase variant="h6">
                                <ExitToAppIcon />
                            </TypographyBase>
                        }
                    >
                        <TypographyBase variant="h5">Sign In</TypographyBase>
                    </ButtonBase>
                </BoxBase>
            </BoxBase>
        </BoxBase>
    );

    switch (variant) {
        case "logged-in":
            return userProfileLoggedIn;
        case "logged-out":
            return userProfileLoggedOut;
        default:
            return userProfileLoggedIn;
    }
};

export default UserProfileBase;
