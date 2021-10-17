import DividerBase, { DividerBaseProps } from ".";
import BoxBase from "../../Boxes/BoxBase";
import ListItemTextBase from "../../ListItemTexts/ListItemTextBase";
import ListItemButtonBase from "../../ListItems/ListItemButtonBase";
import ListBase from "../../Lists/ListBase";

import { Story } from "@storybook/react";

export default {
    title: "Components/DividerBase",
    component: { DividerBase, ListBase, ListItemBase: ListItemButtonBase, BoxBase },
};

// @kien-tran please help me check this and the ListItemButtonBase component
const Template: Story<DividerBaseProps> = (args) => {
    return (
        <BoxBase width={360}>
            <ListBase>
                <ListItemButtonBase disableGutters>
                    <ListItemTextBase primary="Inbox" />
                </ListItemButtonBase>
                <DividerBase {...args} />
                <ListItemButtonBase disableGutters>
                    <ListItemTextBase primary="Drafts" />
                </ListItemButtonBase>
                <DividerBase {...args} />
                <ListItemButtonBase disableGutters>
                    <ListItemTextBase primary="Trash" />
                </ListItemButtonBase>
                <DividerBase {...args} />
                <ListItemButtonBase disableGutters>
                    <ListItemTextBase primary="Spam" />
                </ListItemButtonBase>
                <DividerBase {...args} />
            </ListBase>
        </BoxBase>
    );
};

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
    isHighlighted: true,
};
