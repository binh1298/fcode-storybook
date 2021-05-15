import SwitchBase, { SwitchBaseProps } from ".";

import { Story } from "@storybook/react";

export default {
    title: "Components/SwitchBase",
    component: SwitchBase,
};

const Template: Story<SwitchBaseProps> = (args) => <SwitchBase {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    color: "primary",
    name: "Test",
};
export const Secondary = Template.bind({});
Secondary.args = {
    color: "secondary",
    name: "Test",
};
