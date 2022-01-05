import { MouseEventHandler } from "react";

import {
    ArrowLeft as ArrowLeftIcon,
    Settings as SettingsIcon,
    ExitToApp as ExitToAppIcon,
    Edit as EditIcon,
} from "@mui/icons-material";
import AvatarBase from "src/components/Avatars/AvatarBase";
import BoxBase from "src/components/Boxes/BoxBase";
import ButtonBase from "src/components/Buttons/ButtonBase";
import DividerBase from "src/components/Dividers/DividerBase";
import IconButtonBase from "src/components/IconButtons/IconButtonBase";
import TypographyBase from "src/components/Typography/TypographyBase";

export interface UserProfileProps {
    width?: number;
    variant?: "logged-in" | "logged-out";
    logoUrl?: string;
    avatarUrl?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const UserProfileLoggedIn: React.FC<UserProfileProps> = (props) => {
    const { width, logoUrl, avatarUrl, onClick } = props;

    return (
        <BoxBase width={width}>
            <BoxBase
                display="flex"
                justifyContent="space-between"
                bgcolor="primary"
                px={3}
                pt={3}
                pb={1}
                data-testid="UserProfile__root"
            >
                <BoxBase display="flex" bgcolor="primary">
                    <IconButtonBase color="inherit" edge="start" onClick={onClick}>
                        <ArrowLeftIcon />
                    </IconButtonBase>
                    <AvatarBase variant="square" src={logoUrl} />
                    <BoxBase bgcolor="primary" px={1}>
                        <TypographyBase variant="h6">REPLY</TypographyBase>
                    </BoxBase>
                </BoxBase>

                <BoxBase display="flex" justifyContent="flex-end" bgcolor="primary">
                    <BoxBase bgcolor="primary" px={2}>
                        <AvatarBase src={avatarUrl} />
                    </BoxBase>
                    <SettingsIcon />
                </BoxBase>
            </BoxBase>
            <BoxBase bgcolor="primary" textAlign="center" pl={3} pb={2}>
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
};

const UserProfileLoggedOut: React.FC<UserProfileProps> = (props) => {
    const { width, logoUrl, onClick } = props;

    return (
        <BoxBase width={width}>
            <BoxBase
                display="flex"
                bgcolor="primary"
                pt={3}
                px={3}
                pb={1}
                data-testid="UserProfile__root"
            >
                <IconButtonBase color="inherit" edge="start" onClick={onClick}>
                    <ArrowLeftIcon />
                </IconButtonBase>
                <AvatarBase variant="square" src={logoUrl} />
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
};

const UserProfileBase = (props: UserProfileProps) => {
    const { variant, ...rest } = props;

    switch (variant) {
        case "logged-in":
            return <UserProfileLoggedIn {...rest} />;
        case "logged-out":
            return <UserProfileLoggedOut {...rest} />;
        default:
            return <UserProfileLoggedIn {...rest} />;
    }
};

export default UserProfileBase;
