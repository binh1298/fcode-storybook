import CircularProgressBase, { CircularProgressBaseProps } from ".";

import { Story } from "@storybook/react";

export default {
    title: "Components/CircularProgressBase",
    component: CircularProgressBase,
};

const Template: Story<CircularProgressBaseProps> = (args) => <CircularProgressBase {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
    color: "secondary",
};
