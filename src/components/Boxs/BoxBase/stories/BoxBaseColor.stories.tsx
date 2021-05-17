import BoxBase, { BoxBaseProps } from "..";
import { argTypes } from "./ArgTypes.BoxBase.stories.component";

import { Story } from "@storybook/react";

export default {
    title: "Components/BoxBase/Color/bgcolor",
    component: BoxBase,
    argTypes: {
        ...argTypes,
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

export const Default = Template.bind({});
Default.args = {
    minHeight: 300,
    width: 1,
    bgcolor: "common",
    children: "Default",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
};

export const ImportantColor = Template.bind({});
ImportantColor.args = {
    minHeight: 300,
    width: 1,
    bgcolor: "primary",
    children: "Demo Override Color",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    overrideColor: "secondary.main",
};
