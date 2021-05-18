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
            <ListItemIconBase bgColor="primary" color="secondary">
                <InboxIcon />
            </ListItemIconBase>
            <ListItemTextBase primary="Inbox" color="secondary-main" />
        </ListItemBase>

        {listItems.map((item, index) => (
            <ListItemBase key={index} button>
                <ListItemIconBase bgColor="primary">{item.icon}</ListItemIconBase>
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
            <BoxBase display="flex" justifyContent="space-between" flexGrow={1}>
                <BoxBase display="flex" flexGrow={1}>
                    <BoxBase bgcolor="primary">
                        <ArrowLeftIcon />
                    </BoxBase>
                    <AvatarBase variant="square" src={replyLogoSource} />
                    <BoxBase ml={2} bgcolor="primary">
                        <TypographyBase variant="h6">REPLY</TypographyBase>
                    </BoxBase>
                </BoxBase>
                <BoxBase display="flex" justifyContent="flex-end" alignItems="center" flexGrow={1}>
                    <AvatarBase src={fcodeAvatarSource} />
                    <BoxBase bgcolor="primary" pl={2}>
                        <SettingsIcon />
                    </BoxBase>
                </BoxBase>
            </BoxBase>
        </ListItemBase>
        <ListItemBase>
            <BoxBase pl={2} pt={1} pb={2}>
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
        </ListItemBase>

        <ListItemBase button>
            <ListItemIconBase bgColor="primary" color="secondary">
                <InboxIcon />
            </ListItemIconBase>
            <ListItemTextBase primary="Inbox" color="secondary-main" />
        </ListItemBase>

        {listItems.map((item, index) => (
            <ListItemBase key={index} button>
                <ListItemIconBase bgColor="primary">{item.icon}</ListItemIconBase>
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
            <BoxBase display="flex" justifyContent="space-between" flexGrow={1}>
                <BoxBase display="flex" flexGrow={1}>
                    <BoxBase bgcolor="primary">
                        <ArrowLeftIcon />
                    </BoxBase>
                    <AvatarBase variant="square" src={replyLogoSource} />
                    <BoxBase ml={2} bgcolor="primary">
                        <TypographyBase variant="h6">REPLY</TypographyBase>
                    </BoxBase>
                </BoxBase>
            </BoxBase>
        </ListItemBase>

        <ListItemBase divider>
            <BoxBase display="flex" justifyContent="center" bgcolor="primary" flexGrow={1} pt={1}>
                <TypographyBase variant="body1">WELCOME TO OUR APP</TypographyBase>
            </BoxBase>
        </ListItemBase>

        <ListItemBase>
            <BoxBase display="flex" justifyContent="center" flexGrow={1} pl={2} pt={2} pb={2}>
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
        </ListItemBase>
    </ListBase>
);
LoggedOut.args = {
    width: 320,
};
