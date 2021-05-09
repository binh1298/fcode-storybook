import BoxBase, { BoxBaseProps } from "..";
import { argTypes } from "./ArgTypes.BoxBase.component";
import DemoFlexBoxBase from "./DemoFlexBoxBase.stories.component";

import { Story } from "@storybook/react";

export default {
    title: "Components/BoxBase/Flex/AlignItems",
    component: BoxBase,
    argTypes: {
        ...argTypes,
    },
};

const Template: Story<BoxBaseProps> = (args) => {
    return <DemoFlexBoxBase {...args} />;
};

export const Baseline = Template.bind({});
Baseline.args = {
    alignItems: "baseline",
    minHeight: 300,
    width: 1,
    display: "flex",
    bgcolor: "info",
};

export const Center = Template.bind({});
Center.args = {
    alignItems: "center",
    minHeight: 300,
    width: 1,
    display: "flex",
    bgcolor: "info",
};

export const FlexEnd = Template.bind({});
FlexEnd.args = {
    alignItems: "flex-end",
    minHeight: 300,
    width: 1,
    display: "flex",
    bgcolor: "info",
};

export const FlexStart = Template.bind({});
FlexStart.args = {
    alignItems: "flex-start",
    minHeight: 300,
    width: 1,
    display: "flex",
    bgcolor: "info",
};

export const Stretch = Template.bind({});
Stretch.args = {
    alignItems: "stretch",
    minHeight: 300,
    width: 1,
    display: "flex",
    bgcolor: "info",
};
