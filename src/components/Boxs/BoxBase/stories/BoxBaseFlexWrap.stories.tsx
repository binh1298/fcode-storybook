import BoxBase, { BoxBaseProps } from "..";
import DemoFlexBoxBase from "./DemoFlexBoxBase.stories.component";

import { Story } from "@storybook/react";

export default {
    title: "Components/BoxBase/Flex/FlexWrap",
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

export const Wrap = Template.bind({});
Wrap.args = {
    flexWrap: "wrap",
    minHeight: 300,
    width: 1 / 4,
    display: "flex",
    bgcolor: "info",
};

export const NoWrap = Template.bind({});
NoWrap.args = {
    flexWrap: "nowrap",
    minHeight: 300,
    width: 1 / 4,
    display: "flex",
    bgcolor: "info",
};

export const WrapReverse = Template.bind({});
WrapReverse.args = {
    flexWrap: "wrap-reverse",
    minHeight: 300,
    width: 1 / 4,
    display: "flex",
    bgcolor: "info",
};
