import DividerBase, { DividerBaseProps } from ".";
import BoxBase from "../../Boxs/BoxBase";
import ListItemTextBase from "../../ListItemTexts/ListItemTextBase";
import ListItemBase from "../../ListItems/ListItemBase";
import ListBase from "../../Lists/ListBase";

import { Story } from "@storybook/react";

export default {
    title: "Components/DividerBase",
    component: { DividerBase, ListBase, ListItemBase, BoxBase },
};

const Template: Story<DividerBaseProps> = (args) => {
    return (
        <BoxBase width={360}>
            <ListBase>
                <ListItemBase button disableGutters>
                    <ListItemTextBase primary="Inbox" />
                </ListItemBase>
                <DividerBase {...args} />
                <ListItemBase button disableGutters>
                    <ListItemTextBase primary="Drafts" />
                </ListItemBase>
                <DividerBase {...args} />
                <ListItemBase button disableGutters>
                    <ListItemTextBase primary="Trash" />
                </ListItemBase>
                <DividerBase {...args} />
                <ListItemBase button disableGutters>
                    <ListItemTextBase primary="Spam" />
                </ListItemBase>
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
