import BoxBase, { BoxBaseProps } from "..";
import { argTypes } from "./ArgTypes.BoxBase.stories.component";
import DemoFlexBoxBase from "./DemoFlexBoxBase.stories.component";

import { Story } from "@storybook/react";

export default {
    title: "Components/BoxBase/Flex/JustifyContent",
    component: BoxBase,
    argTypes: {
        ...argTypes,
    },
};

const Template: Story<BoxBaseProps> = (args) => {
    return <DemoFlexBoxBase {...args} />;
};

export const Center = Template.bind({});
Center.args = {
    justifyContent: "center",
    minHeight: 300,
    width: 1,
    display: "flex",
};

export const SpaceAround = Template.bind({});
SpaceAround.args = {
    justifyContent: "space-around",
    minHeight: 300,
    width: 1,
    display: "flex",
};

export const SpaceBetween = Template.bind({});
SpaceBetween.args = {
    justifyContent: "space-between",
    minHeight: 300,
    width: 1,
    display: "flex",
};

export const SpaceEvenly = Template.bind({});
SpaceEvenly.args = {
    justifyContent: "space-evenly",
    minHeight: 300,
    width: 1,
    display: "flex",
};

export const FlexEnd = Template.bind({});
FlexEnd.args = {
    justifyContent: "flex-end",
    minHeight: 300,
    width: 1,
    display: "flex",
};

export const FlexStart = Template.bind({});
FlexStart.args = {
    justifyContent: "flex-start",
    minHeight: 300,
    width: 1,
    display: "flex",
};
