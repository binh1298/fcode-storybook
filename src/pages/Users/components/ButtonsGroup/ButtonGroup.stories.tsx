import ButtonGroups, { IActionProps } from ".";

import { Story, Meta } from "@storybook/react";

export default {
    title: "Components/UserCard/ButtonGroups",
    component: ButtonGroups,
} as Meta;

const Template: Story<IActionProps> = (args) => {
    return <ButtonGroups {...args} />;
};

export const Active = Template.bind({});
Active.args = {
    isActive: true,
};

export const Inactive = Template.bind({});
Inactive.args = {
    isActive: false,
};
