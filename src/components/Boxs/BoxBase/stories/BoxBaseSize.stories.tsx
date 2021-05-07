import BoxBase, { BoxBaseProps } from "..";

import { Story } from "@storybook/react";

export default {
    title: "Components/BoxBase/Size/Size",
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
    return <BoxBase {...args} />;
};

export const WidthLessThan1 = Template.bind({});
WidthLessThan1.args = {
    minHeight: 300,
    width: 3 / 4,
    bgcolor: "primary",
    children: "Width: 75% (width={3 / 4})",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
};

export const WidthEqual1 = Template.bind({});
WidthEqual1.args = {
    minHeight: 300,
    width: 1,
    bgcolor: "primary",
    children: "Width: 100% (width={1})",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
};

export const WidthBiggerThan1 = Template.bind({});
WidthBiggerThan1.args = {
    minHeight: 300,
    width: 200,
    bgcolor: "primary",
    children: "Width: 200px (width={200})",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
};

export const HeighttLessThan1 = Template.bind({});
HeighttLessThan1.args = {
    height: 3 / 4,
    width: 1,
    bgcolor: "primary",
    children: "height: 75% (height={3 / 4})",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
};

export const HeightEqual1 = Template.bind({});
HeightEqual1.args = {
    height: 1,
    width: 1,
    bgcolor: "primary",
    children: "height: 100% (height={1})",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
};

export const HeightBiggerThan1 = Template.bind({});
HeightBiggerThan1.args = {
    height: 200,
    width: 1,
    bgcolor: "primary",
    children: "height: 200px (height={200})",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
};
