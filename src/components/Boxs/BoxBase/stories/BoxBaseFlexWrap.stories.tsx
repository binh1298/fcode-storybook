import BoxBase, { BoxBaseProps } from "..";
import { argTypes } from "./ArgTypes.BoxBase.component";
import DemoFlexBoxBase from "./DemoFlexBoxBase.stories.component";

import { Story } from "@storybook/react";

export default {
    title: "Components/BoxBase/Flex/FlexWrap",
    component: BoxBase,
    argTypes: {
        ...argTypes,
    },
};

const Template: Story<BoxBaseProps> = (args) => {
    return <DemoFlexBoxBase {...args} />;
};

export const Wrap = Template.bind({});
Wrap.args = {
    flexWrap: "wrap",
    minHeight: 300,
    width: 1 / 4,
    display: "flex",
};

export const NoWrap = Template.bind({});
NoWrap.args = {
    flexWrap: "nowrap",
    minHeight: 300,
    width: 1 / 4,
    display: "flex",
};

export const WrapReverse = Template.bind({});
WrapReverse.args = {
    flexWrap: "wrap-reverse",
    minHeight: 300,
    width: 1 / 4,
    display: "flex",
};
