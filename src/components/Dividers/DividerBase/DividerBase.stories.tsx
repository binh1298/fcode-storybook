import DividerBase, { DividerBaseProps } from ".";
import BoxBase from "../../Boxes/BoxBase";
import ListItemButtonBase from "../../ListItemButtons/ListItemButtonBase";
import ListItemTextBase from "../../ListItemTexts/ListItemTextBase";
import ListItemBase from "../../ListItems/ListItemBase";
import ListBase from "../../Lists/ListBase";

import { Story } from "@storybook/react";

export default {
    title: "Components/DividerBase",
    component: {
        DividerBase,
        ListBase,
        ListItemBase,
        ListItemButtonBase,
        ListItemTextBase,
        BoxBase,
    },
};

const dividerListItems = [
    { text: "Inbox", isHighlighted: true },
    { text: "Drafts", isHighlighted: false },
    { text: "Trash", isHighlighted: false },
    { text: "Spam", isHighlighted: false },
];

const Template: Story<DividerBaseProps> = (args) => {
    return (
        <BoxBase width={360}>
            <ListBase>
                {dividerListItems.map((item, index) => (
                    <BoxBase key={index}>
                        <ListItemBase disablePadding>
                            <ListItemButtonBase>
                                <ListItemTextBase primary={item.text} />
                            </ListItemButtonBase>
                        </ListItemBase>
                        <DividerBase {...args} />
                    </BoxBase>
                ))}
            </ListBase>
        </BoxBase>
    );
};

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
    isHighlighted: true,
};
