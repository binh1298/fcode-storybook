import React from "react";

import {
    InboxRounded as InboxIcon,
    StarBorderRounded as StarIcon,
    SendOutlined as SendIcon,
    DeleteOutline as DeleteIcon,
    ReportOutlined as ReportIcon,
    DraftsRounded as DraftsIcon,
} from "@material-ui/icons";
import UserProfileBase from "src/components/UserProfiles/UserProfileBase";

import ListBase, { ListBaseProps } from ".";
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
    <BoxBase width={360}>
        <ListBase {...args}>
            <ListItemBase button highlighted>
                <ListItemIconBase>
                    <InboxIcon />
                </ListItemIconBase>
                <ListItemTextBase primary="Inbox" />
            </ListItemBase>

            {simpleListItems.map((item, index) => (
                <ListItemBase key={index} button>
                    <ListItemIconBase>{item.icon}</ListItemIconBase>
                    <ListItemTextBase primary={item.text} />
                </ListItemBase>
            ))}
        </ListBase>
    </BoxBase>
);

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
    <BoxBase width={360}>
        <UserProfileBase
            variant="logged-in"
            logoSrc={replyLogoSource}
            avatarSrc={fcodeAvatarSource}
        />
        <ListBase {...args}>
            {loggedInListItems.map((item, index) => (
                <ListItemBase key={index} button>
                    <ListItemIconBase>{item.icon}</ListItemIconBase>
                    <ListItemTextBase primary={item.text} />
                </ListItemBase>
            ))}
        </ListBase>
    </BoxBase>
);

export const LoggedOut: Story<ListBaseProps> = () => (
    <BoxBase width={360}>
        <UserProfileBase variant="logged-out" logoSrc={replyLogoSource} />
    </BoxBase>
);
