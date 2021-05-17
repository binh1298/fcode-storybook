import {
    InboxRounded as InboxIcon,
    StarBorderRounded as StarIcon,
    SendOutlined as SendIcon,
    DeleteOutline as DeleteIcon,
    ReportOutlined as ReportIcon,
    DraftsRounded as DraftsIcon,
} from "@material-ui/icons";

import ListBase, { ListBaseProps } from ".";
import ListItemIconBase from "../../ListItemIcons/ListItemIconBase";
import ListItemTextBase from "../../ListItemTexts/ListItemTextBase";
import ListItemBase from "../../ListItems/ListItemBase";
import TypographyBase from "../../Typography/TypographyBase";

import { Story } from "@storybook/react";

export default {
    title: "Components/ListBase",
    subcomponents: { ListItemBase, ListItemIconBase, ListItemTextBase, TypographyBase },
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
        <ListItemBase>
            <ListItemIconBase color="secondary">
                <InboxIcon />
            </ListItemIconBase>
            <ListItemTextBase primary="Inbox" color="secondary-main" />
        </ListItemBase>

        {simpleListItems.map((item, index) => (
            <ListItemBase key={index}>
                <ListItemIconBase>{item.icon}</ListItemIconBase>
                <ListItemTextBase primary={item.text} />
            </ListItemBase>
        ))}
    </ListBase>
);
SimpleList.args = {
    width: 320,
};
