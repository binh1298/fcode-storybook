import React from "react";

import {
    InboxRounded as InboxIcon,
    StarBorderRounded as StarIcon,
    SendOutlined as SendIcon,
    DeleteOutline as DeleteIcon,
    ReportOutlined as ReportIcon,
    DraftsRounded as DraftsIcon,
    ArrowLeft as ArrowLeftIcon,
    Settings as SettingsIcon,
    ExitToApp as ExitToAppIcon,
} from "@material-ui/icons";
import { Edit as EditIcon } from "@material-ui/icons";

import ListBase, { ListBaseProps } from ".";
import AvatarBase from "../../Avatars/AvatarBase";
import BoxBase from "../../Boxs/BoxBase";
import ButtonBase from "../../Buttons/ButtonBase";
import ListItemIconBase from "../../ListItemIcons/ListItemIconBase";
import ListItemTextBase from "../../ListItemTexts/ListItemTextBase";
import ListItemBase from "../../ListItems/ListItemBase";
import TypographyBase from "../../Typography/TypographyBase";

import { Story } from "@storybook/react";

export default {
    title: "Components/ListBase",
    subcomponents: {
        ListItemBase,
        ListItemIconBase,
        ListItemTextBase,
        TypographyBase,
        ButtonBase,
        BoxBase,
    },
    component: ListBase,
};

const simpleListItems = [
    { icon: <StarIcon />, text: "Starred" },
    { icon: <SendIcon />, text: "Sent" },
    { icon: <DeleteIcon />, text: "Trash" },
    { icon: <ReportIcon />, text: "Spam" },
    { icon: <DraftsIcon />, text: "Drafts" },
];

export const SimpleList: Story<ListBaseProps> = (args) => (
    <ListBase {...args}>
        <ListItemBase button>
            <ListItemIconBase bgcolor="primary" color="secondary">
                <InboxIcon />
            </ListItemIconBase>
            <ListItemTextBase primary="Inbox" color="secondary-main" />
        </ListItemBase>

        {simpleListItems.map((item, index) => (
            <ListItemBase key={index} button>
                <ListItemIconBase bgcolor="primary">{item.icon}</ListItemIconBase>
                <ListItemTextBase primary={item.text} />
            </ListItemBase>
        ))}
    </ListBase>
);
SimpleList.args = {
    width: 320,
};

const replyLogoSource =
    "https://res.cloudinary.com/dq7l8216n/image/upload/v1621347887/Reply_Logo.png";
const fcodeAvatarSource =
    "https://res.cloudinary.com/dq7l8216n/image/upload/v1620235303/FCode-Avatar.png";

const loggedInListItems = [
    { icon: <InboxIcon />, text: "Inbox" },
    { icon: <StarIcon />, text: "Starred" },
    { icon: <SendIcon />, text: "Sent" },
    { icon: <DeleteIcon />, text: "Trash" },
    { icon: <ReportIcon />, text: "Spam" },
    { icon: <DraftsIcon />, text: "Drafts" },
];

export const LoggedIn: Story<ListBaseProps> = (args) => (
    <React.Fragment>
        <ListBase {...args}>
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
        </ListBase>

        <ListBase {...args}>
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

            {loggedInListItems.map((item, index) => (
                <ListItemBase key={index} button>
                    <ListItemIconBase bgcolor="primary">{item.icon}</ListItemIconBase>
                    <ListItemTextBase primary={item.text} />
                </ListItemBase>
            ))}
        </ListBase>
    </React.Fragment>
);
LoggedIn.args = {
    width: 320,
    disablePadding: true,
};

export const LoggedOut: Story<ListBaseProps> = (args) => (
    <ListBase {...args}>
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
LoggedOut.args = {
    width: 320,
};
