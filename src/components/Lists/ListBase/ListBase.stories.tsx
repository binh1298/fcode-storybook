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

import { Story } from "@storybook/react";

export default {
    title: "Components/ListBase",
    subcomponents: { ListItemBase, ListItemIconBase, ListItemTextBase },
    component: ListBase,
};

export const SimpleList: Story<ListBaseProps> = (args) => (
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
                        <MaterialBox color="secondary.main" fontWeight="fontWeightBold">
                            Inbox
                        </MaterialBox>
                    }
                />
            </ListItemBase>
        </MaterialBox>
        <ListItemBase>
            <MaterialBox ml={3}>
                <ListItemIconBase>
                    <MaterialBox color="primary.contrastText" bgcolor="primary.main">
                        <StarIcon />
                    </MaterialBox>
                </ListItemIconBase>
            </MaterialBox>
            <ListItemTextBase primary="Starred" />
        </ListItemBase>

        <ListItemBase>
            <MaterialBox ml={3}>
                <ListItemIconBase>
                    <MaterialBox color="primary.contrastText" bgcolor="primary.main">
                        <SendIcon />
                    </MaterialBox>
                </ListItemIconBase>
            </MaterialBox>
            <ListItemTextBase primary="Sent" />
        </ListItemBase>

        <ListItemBase>
            <MaterialBox ml={3}>
                <ListItemIconBase>
                    <MaterialBox color="primary.contrastText" bgcolor="primary.main">
                        <DeleteIcon />
                    </MaterialBox>
                </ListItemIconBase>
            </MaterialBox>
            <ListItemTextBase primary="Trash" />
        </ListItemBase>

        <ListItemBase>
            <MaterialBox ml={3}>
                <ListItemIconBase>
                    <MaterialBox color="primary.contrastText" bgcolor="primary.main">
                        <ReportIcon />
                    </MaterialBox>
                </ListItemIconBase>
            </MaterialBox>
            <ListItemTextBase primary="Spam" />
        </ListItemBase>

        <ListItemBase>
            <MaterialBox ml={3}>
                <ListItemIconBase>
                    <MaterialBox color="primary.contrastText" bgcolor="primary.main">
                        <DraftsIcon />
                    </MaterialBox>
                </ListItemIconBase>
            </MaterialBox>
            <ListItemTextBase primary="Drafts" />
        </ListItemBase>
    </ListBase>
);
