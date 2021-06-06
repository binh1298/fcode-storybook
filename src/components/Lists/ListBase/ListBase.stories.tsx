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
import ButtonBase from "../../Buttons/ButtonBase";
import ListItemIconBase from "../../ListItemIcons/ListItemIconBase";
import ListItemTextBase from "../../ListItemTexts/ListItemTextBase";
import ListItemBase from "../../ListItems/ListItemBase";
import TypographyBase from "../../Typography/TypographyBase";

import { Story } from "@storybook/react";

export default {
    title: "Components/ListBase",
    subcomponents: { ListItemBase, ListItemIconBase, ListItemTextBase, TypographyBase, ButtonBase },
    component: ListBase,
};

const listItems = [
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

        {listItems.map((item, index) => (
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

export const LoggedIn: Story<ListBaseProps> = (args) => (
    <ListBase {...args}>
        <ListItemBase>
            <ListItemIconBase bgcolor="primary" width={24}>
                <ArrowLeftIcon />
            </ListItemIconBase>
            <AvatarBase variant="square" src={replyLogoSource} />
            <TypographyBase variant="h6" pl={2} pr={10} bgcolor="primary">
                REPLY
            </TypographyBase>
            <AvatarBase src={fcodeAvatarSource} />
            <ListItemIconBase bgcolor="primary" pl={1} width={24}>
                <SettingsIcon />
            </ListItemIconBase>
        </ListItemBase>
        <ListItemBase>
            <ButtonBase
                pl={4}
                pt={1}
                pb={2}
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

        <ListItemBase button>
            <ListItemIconBase bgcolor="primary" color="secondary" ml={3}>
                <InboxIcon />
            </ListItemIconBase>
            <ListItemTextBase primary="Inbox" color="secondary-main" />
        </ListItemBase>

        {listItems.map((item, index) => (
            <ListItemBase key={index} button>
                <ListItemIconBase bgcolor="primary" ml={3}>
                    {item.icon}
                </ListItemIconBase>
                <ListItemTextBase primary={item.text} />
            </ListItemBase>
        ))}
    </ListBase>
);
LoggedIn.args = {
    width: 320,
};

export const LoggedOut: Story<ListBaseProps> = (args) => (
    <ListBase {...args}>
        <ListItemBase>
            <ListItemIconBase bgcolor="primary" width={24}>
                <ArrowLeftIcon />
            </ListItemIconBase>
            <AvatarBase variant="square" src={replyLogoSource} />

            <TypographyBase ml={2} variant="h6" bgcolor="primary">
                REPLY
            </TypographyBase>
        </ListItemBase>

        <ListItemBase divider>
            <TypographyBase variant="body1" bgcolor="primary" ml={3}>
                WELCOME TO OUR APP
            </TypographyBase>
        </ListItemBase>

        <ListItemBase>
            <ButtonBase
                pl={2}
                pt={2}
                pb={2}
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
