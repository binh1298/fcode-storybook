import BoxBase, { BoxBaseProps } from "..";

import { Story } from "@storybook/react";

export default {
    title: "Components/BoxBase/Color/bgcolor",
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

export const Primary = Template.bind({});
Primary.args = {
    minHeight: 300,
    width: 1,
    bgcolor: "primary",
    children: "Primary",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
};

export const Secondary = Template.bind({});
Secondary.args = {
    minHeight: 300,
    width: 1,
    bgcolor: "secondary",
    children: "Secondary",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
};

export const Success = Template.bind({});
Success.args = {
    minHeight: 300,
    width: 1,
    bgcolor: "success",
    children: "Success",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
};

export const Warning = Template.bind({});
Warning.args = {
    minHeight: 300,
    width: 1,
    bgcolor: "warning",
    children: "Warning",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
};

export const Info = Template.bind({});
Info.args = {
    minHeight: 300,
    width: 1,
    bgcolor: "info",
    children: "Info",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
};
