import ButtonBase, { ButtonBaseProps } from ".";

import { Story } from "@storybook/react";

//👇 This default export determines where your story goes in the story list
export default {
    title: "Components/ButtonBase",
    component: ButtonBase,
};

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonBaseProps> = (args) => <ButtonBase {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: "Button Base",
    variant: "contained",
    color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: "Button Base",
    variant: "contained",
    color: "secondary",
};
