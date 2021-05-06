import { Box as MaterialBox } from "@material-ui/core";
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
    <MaterialBox width={320}>
        <ListBase {...args}>
            <MaterialBox color="secondary.main" bgcolor="primary.main">
                <ListItemBase>
                    <MaterialBox ml={3}>
                        <ListItemIconBase>
                            <MaterialBox color="secondary.main" bgcolor="primary.main">
                                <InboxIcon />
                            </MaterialBox>
                        </ListItemIconBase>
                    </MaterialBox>
                    <ListItemTextBase
                        primary={
                            <TypographyBase variant="h6" color="secondary">
                                Inbox
                            </TypographyBase>
                        }
                    />
                </ListItemBase>
            </MaterialBox>

            {simpleListItems.map((item, index) => (
                <ListItemBase key={index}>
                    <MaterialBox ml={3}>
                        <ListItemIconBase>
                            <MaterialBox color="primary.contrastText" bgcolor="primary.main">
                                {item.icon}
                            </MaterialBox>
                        </ListItemIconBase>
                    </MaterialBox>
                    <ListItemTextBase primary={item.text} />
                </ListItemBase>
            ))}
        </ListBase>
    </MaterialBox>
);
