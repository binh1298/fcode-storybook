import BoxBase, { BoxBaseProps } from "..";
import DemoFlexBoxBase from "./DemoFlexBoxBase.stories.component";

import { Story } from "@storybook/react";

export default {
    title: "Components/BoxBase/Flex/FlexDirection",
    component: BoxBase,
    argTypes: {
        bgcolor: {
            control: {
                type: "radio",
                options: [undefined, "primary", "secondary", "info", "error", "warning", "success"],
            },
        },
        colorProps: {
            control: {
                type: "radio",
                options: ["main", "light", "dark"],
            },
        },
        color: {
            table: {
                disable: true,
            },
        },
        m: {
            description: "margin = m * theme spacing (default: 8px), same with mt, mr, mb, ml",
        },
        p: {
            description: "padding = m * theme spacing (default: 8px), same width pt, pr, pb, pl",
        },
        width: {
            description:
                "(0 < width <= 1) <=> percent | width > 1 <=> pixel, same width minWidth, maxWidth",
        },
        height: {
            description:
                "(0 < height <= 1) <=> percent | height > 1 <=> pixel, same width minHeight, maxHeight",
        },
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
