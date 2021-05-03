import { Box } from "@material-ui/core";
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

export const ListBase1: Story<ListBaseProps> = (args) => (
    <Box width={320} color="primary.contrastText" bgcolor="primary.main">
        <ListBase {...args}>
            <Box color="secondary.main" bgcolor="primary.main">
                <ListItemBase>
                    <Box ml={3}>
                        <ListItemIconBase>
                            <Box color="secondary.main" bgcolor="primary.main">
                                <InboxIcon />
                            </Box>
                        </ListItemIconBase>
                    </Box>
                    <ListItemTextBase primary={<Box fontWeight="fontWeightBold">Inbox</Box>} />
                </ListItemBase>
            </Box>
            <ListItemBase>
                <Box ml={3}>
                    <ListItemIconBase>
                        <Box color="primary.contrastText" bgcolor="primary.main">
                            <StarIcon />
                        </Box>
                    </ListItemIconBase>
                </Box>
                <ListItemTextBase primary="Starred" />
            </ListItemBase>

            <ListItemBase>
                <Box ml={3}>
                    <ListItemIconBase>
                        <Box color="primary.contrastText" bgcolor="primary.main">
                            <SendIcon />
                        </Box>
                    </ListItemIconBase>
                </Box>
                <ListItemTextBase primary="Sent" />
            </ListItemBase>

            <ListItemBase>
                <Box ml={3}>
                    <ListItemIconBase>
                        <Box color="primary.contrastText" bgcolor="primary.main">
                            <DeleteIcon />
                        </Box>
                    </ListItemIconBase>
                </Box>
                <ListItemTextBase primary="Trash" />
            </ListItemBase>

            <ListItemBase>
                <Box ml={3}>
                    <ListItemIconBase>
                        <Box color="primary.contrastText" bgcolor="primary.main">
                            <ReportIcon />
                        </Box>
                    </ListItemIconBase>
                </Box>
                <ListItemTextBase primary="Spam" />
            </ListItemBase>

            <ListItemBase>
                <Box ml={3}>
                    <ListItemIconBase>
                        <Box color="primary.contrastText" bgcolor="primary.main">
                            <DraftsIcon />
                        </Box>
                    </ListItemIconBase>
                </Box>
                <ListItemTextBase primary="Drafts" />
            </ListItemBase>
        </ListBase>
    </Box>
);
