import ThematicBreak, { ThematicBreakProps } from ".";

import { Story } from "@storybook/react";

export default {
    title: "Components/ThematicBreak",
    component: ThematicBreak,
};

const Template: Story<ThematicBreakProps> = (args) => <ThematicBreak {...args} />;

export const LineBreak = Template.bind({});
LineBreak.args = {
    caption: "or",
    width: 70,
    height: 40,
};
