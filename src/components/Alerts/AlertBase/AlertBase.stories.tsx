import AlertBase, { AlertBaseProps } from ".";

import { Story } from "@storybook/react";

export default {
    title: "Components/AlertBase",
    component: AlertBase,
};

const Template: Story<AlertBaseProps> = (args) => <AlertBase {...args} />;

export const FilledAlertError = Template.bind({});
FilledAlertError.args = {
    children: "This is an error alert — check it out!",
    severity: "error",
    variant: "filled",
};

export const FilledAlertWarning = Template.bind({});
FilledAlertWarning.args = {
    children: "This is an warning alert — check it out!",
    severity: "warning",
    variant: "filled",
};

export const FilledAlertInfo = Template.bind({});
FilledAlertInfo.args = {
    children: "This is an info alert — check it out!",
    severity: "info",
    variant: "filled",
};

export const FilledAlertSuccess = Template.bind({});
FilledAlertSuccess.args = {
    children: "This is an success alert — check it out!",
    severity: "success",
    variant: "filled",
};
