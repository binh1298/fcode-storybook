import SpinnerBase, { SpinnerBaseProps } from ".";

import { Story, Meta } from "@storybook/react";

export default {
    title: "Components/SpinnerBase",
    component: SpinnerBase,
} as Meta;

const Template: Story<SpinnerBaseProps> = (args) => {
    return <SpinnerBase {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    variant: undefined,
};

export const Determinate = Template.bind({});
Determinate.args = {
    variant: "determinate",
    value: 30,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
    variant: "indeterminate",
    color: "secondary",
};

export const Static = Template.bind({});
Static.args = {
    variant: "static",
    value: 30,
};

export const Notification = Template.bind({});
Notification.args = {
    variant: "indeterminate",
    color: "secondary",
    notification: "Loading",
};

export const Size = Template.bind({});
Size.args = {
    variant: "indeterminate",
    color: "primary",
    size: 80,
};
