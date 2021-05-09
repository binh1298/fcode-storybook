import BoxBase, { BoxBaseProps } from "..";
import { argTypes } from "./ArgTypes.BoxBase.component";
import DemoFlexBoxBase from "./DemoFlexBoxBase.stories.component";

import { Story } from "@storybook/react";

export default {
    title: "Components/BoxBase/Flex/FlexDirection",
    component: BoxBase,
    argTypes: {
        ...argTypes,
    },
};

const Template: Story<BoxBaseProps> = (args) => {
    return <DemoFlexBoxBase {...args} />;
};

export const Row = Template.bind({});
Row.args = {
    flexDirection: "row",
    minHeight: 300,
    width: 1,
    display: "flex",
    bgcolor: "info",
};

export const Column = Template.bind({});
Column.args = {
    flexDirection: "column",
    minHeight: 300,
    width: 1,
    display: "flex",
    bgcolor: "info",
};

export const RowReverse = Template.bind({});
RowReverse.args = {
    flexDirection: "row-reverse",
    minHeight: 300,
    width: 1,
    display: "flex",
    bgcolor: "info",
};

export const ColumnReverse = Template.bind({});
ColumnReverse.args = {
    flexDirection: "column-reverse",
    minHeight: 300,
    width: 1,
    display: "flex",
    bgcolor: "info",
};
