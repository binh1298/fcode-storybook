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
import BoxBase from "../../Boxes/BoxBase";
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
    { icon: <InboxIcon />, text: "Inbox", highlighted: true },
    { icon: <StarIcon />, text: "Starred", highlighted: false },
    { icon: <SendIcon />, text: "Sent", highlighted: false },
    { icon: <DeleteIcon />, text: "Trash", highlighted: false },
    { icon: <ReportIcon />, text: "Spam", highlighted: false },
    { icon: <DraftsIcon />, text: "Drafts", highlighted: false },
];

export const SimpleList: Story<ListBaseProps> = (args) => (
    <BoxBase width={360}>
        <ListBase {...args}>
            {simpleListItems.map((item, index) => (
                <ListItemBase key={index} button highlighted={item.highlighted}>
                    <ListItemIconBase>{item.icon}</ListItemIconBase>
                    <ListItemTextBase primary={item.text} />
                </ListItemBase>
            ))}
        </ListBase>
    </BoxBase>
);

const replyLogoUrl = "https://res.cloudinary.com/dq7l8216n/image/upload/v1621347887/Reply_Logo.png";
const fcodeAvatarUrl =
    "https://res.cloudinary.com/dq7l8216n/image/upload/v1620235303/FCode-Avatar.png";

const loggedInListItems = [
    { icon: <InboxIcon />, text: "Inbox", highlighted: true },
    { icon: <StarIcon />, text: "Starred", highlighted: false },
    { icon: <SendIcon />, text: "Sent", highlighted: false },
    { icon: <DeleteIcon />, text: "Trash", highlighted: false },
    { icon: <ReportIcon />, text: "Spam", highlighted: false },
    { icon: <DraftsIcon />, text: "Drafts", highlighted: false },
];

export const LoggedIn: Story<ListBaseProps> = (args) => (
    <BoxBase width={360}>
        <UserProfileBase variant="logged-in" logoUrl={replyLogoUrl} avatarUrl={fcodeAvatarUrl} />
        <ListBase {...args}>
            {loggedInListItems.map((item, index) => (
                <ListItemBase key={index} button highlighted={item.highlighted}>
                    <ListItemIconBase>{item.icon}</ListItemIconBase>
                    <ListItemTextBase primary={item.text} />
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
