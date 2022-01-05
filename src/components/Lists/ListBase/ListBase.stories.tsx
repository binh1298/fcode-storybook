import {
    InboxRounded as InboxIcon,
    StarBorderRounded as StarIcon,
    SendOutlined as SendIcon,
    DeleteOutline as DeleteIcon,
    ReportOutlined as ReportIcon,
    DraftsRounded as DraftsIcon,
} from "@mui/icons-material";
import UserProfileBase from "src/components/UserProfiles/UserProfile";

import ListBase, { ListBaseProps } from ".";
import BoxBase from "../../Boxes/BoxBase";
import ButtonBase from "../../Buttons/ButtonBase";
import ListItemButtonBase from "../../ListItemButtons/ListItemButtonBase";
import ListItemIconBase from "../../ListItemIcons/ListItemIconBase";
import ListItemTextBase from "../../ListItemTexts/ListItemTextBase";
import ListItemBase from "../../ListItems/ListItemBase";
import TypographyBase from "../../Typography/TypographyBase";

import { Story } from "@storybook/react";

export default {
    title: "Components/ListBase",
    subcomponents: {
        ListItemBase,
        ListItemButtonBase,
        ListItemIconBase,
        ListItemTextBase,
        TypographyBase,
        ButtonBase,
        BoxBase,
    },
    component: ListBase,
};

const basicListItems = [
    { icon: <InboxIcon />, text: "Inbox", isHighlighted: true },
    { icon: <StarIcon />, text: "Starred", isHighlighted: false },
    { icon: <SendIcon />, text: "Sent", isHighlighted: false },
    { icon: <DeleteIcon />, text: "Trash", isHighlighted: false },
    { icon: <ReportIcon />, text: "Spam", isHighlighted: false },
    { icon: <DraftsIcon />, text: "Drafts", isHighlighted: false },
];

export const BasicList: Story<ListBaseProps> = (args) => (
    <BoxBase width={360}>
        <ListBase {...args}>
            {basicListItems.map((item, index) => (
                <ListItemBase key={index} disablePadding>
                    <ListItemButtonBase isHighlighted={item.isHighlighted}>
                        <ListItemIconBase>{item.icon}</ListItemIconBase>
                        <ListItemTextBase primary={item.text} />
                    </ListItemButtonBase>
                </ListItemBase>
            ))}
        </ListBase>
    </BoxBase>
);

const replyLogoUrl = "https://res.cloudinary.com/dq7l8216n/image/upload/v1621347887/Relay_Logo.png";
const fcodeAvatarUrl =
    "https://res.cloudinary.com/dq7l8216n/image/upload/v1620235303/FCode-Avatar.png";

const loggedInListItems = [
    { icon: <InboxIcon />, text: "Inbox", isHighlighted: true },
    { icon: <StarIcon />, text: "Starred", isHighlighted: false },
    { icon: <SendIcon />, text: "Sent", isHighlighted: false },
    { icon: <DeleteIcon />, text: "Trash", isHighlighted: false },
    { icon: <ReportIcon />, text: "Spam", isHighlighted: false },
    { icon: <DraftsIcon />, text: "Drafts", isHighlighted: false },
];

export const LoggedIn: Story<ListBaseProps> = (args) => (
    <BoxBase width={360}>
        <UserProfileBase variant="logged-in" logoUrl={replyLogoUrl} avatarUrl={fcodeAvatarUrl} />
        <ListBase {...args}>
            {loggedInListItems.map((item, index) => (
                <ListItemBase key={index} disablePadding>
                    <ListItemButtonBase isHighlighted={item.isHighlighted}>
                        <ListItemIconBase>{item.icon}</ListItemIconBase>
                        <ListItemTextBase primary={item.text} />
                    </ListItemButtonBase>
                </ListItemBase>
            ))}
        </ListBase>
    </BoxBase>
);

export const LoggedOut: Story<ListBaseProps> = () => (
    <BoxBase width={360}>
        <UserProfileBase variant="logged-out" logoUrl={replyLogoUrl} />
    </BoxBase>
);
