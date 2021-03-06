import React from "react";

import { Header, HeaderProps } from "./Header";

import { Story, Meta } from "@storybook/react";

export default {
    title: "Example/Header",
    component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
