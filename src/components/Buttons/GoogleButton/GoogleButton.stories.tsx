import GoogleButton, { GoogleButtonProps } from ".";

import { Story } from "@storybook/react";

export default {
    title: "Components/Buttons/GoogleButton",
    component: GoogleButton,
};

const Template: Story<GoogleButtonProps> = (args) => <GoogleButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: "Login With Google",
    color: "default",
    variant: "contained",
};
