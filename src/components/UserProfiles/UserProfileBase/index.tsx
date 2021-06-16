import {
    ArrowLeft as ArrowLeftIcon,
    Settings as SettingsIcon,
    ExitToApp as ExitToAppIcon,
    Edit as EditIcon,
} from "@material-ui/icons";
import AvatarBase from "src/components/Avatars/AvatarBase";
import ButtonBase from "src/components/Buttons/ButtonBase";
import ListItemIconBase from "src/components/ListItemIcons/ListItemIconBase";
import ListItemTextBase from "src/components/ListItemTexts/ListItemTextBase";
import ListItemBase from "src/components/ListItems/ListItemBase";
import ListBase, { ListBaseProps } from "src/components/Lists/ListBase";
import TypographyBase from "src/components/Typography/TypographyBase";

const replyLogoSource =
    "https://res.cloudinary.com/dq7l8216n/image/upload/v1621347887/Reply_Logo.png";
const fcodeAvatarSource =
    "https://res.cloudinary.com/dq7l8216n/image/upload/v1620235303/FCode-Avatar.png";

export interface UserProfileBaseProps extends ListBaseProps {
    variant?: "logged-in" | "logged-out";
}

const UserProfileBase = (props: UserProfileBaseProps) => {
    const { variant, ...rest } = props;

    let userProfileLoggedIn: JSX.Element = (
        <ListBase {...rest}>
            <ListItemBase disableGutters>
                <ListBase disablePadding>
                    <ListItemBase disableGutters>
                        <ArrowLeftIcon />
                        <ListItemIconBase>
                            <AvatarBase variant="square" src={replyLogoSource} />
                        </ListItemIconBase>
                        <ListItemTextBase
                            primary="REPLY"
                            color="primary"
                            primaryTypographyProps={{ variant: "h6" }}
                        />
                    </ListItemBase>
                </ListBase>

                <ListBase disablePadding>
                    <ListItemBase disableGutters>
                        <ListItemIconBase bgcolor="primary">
                            <AvatarBase src={fcodeAvatarSource} />
                        </ListItemIconBase>
                        <SettingsIcon />
                    </ListItemBase>
                </ListBase>
            </ListItemBase>

            <ListItemBase variant="center">
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
            </ListItemBase>
        </ListBase>
    );

    let userProfileLoggedOut: JSX.Element = (
        <ListBase {...rest}>
            <ListItemBase>
                <ArrowLeftIcon />
                <ListItemIconBase bgcolor="primary">
                    <AvatarBase variant="square" src={replyLogoSource} />
                </ListItemIconBase>
                <TypographyBase variant="h6">REPLY</TypographyBase>
            </ListItemBase>

            <ListItemBase divider variant="center">
                <TypographyBase variant="body1">WELCOME TO OUR APP</TypographyBase>
            </ListItemBase>

            <ListItemBase variant="center">
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
            </ListItemBase>
        </ListBase>
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
