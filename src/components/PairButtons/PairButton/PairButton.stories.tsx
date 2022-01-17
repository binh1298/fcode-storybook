import PairButton, { PairButtonProps } from ".";

import { action } from "@storybook/addon-actions";
import { Story } from "@storybook/react";

export default {
    title: "Components/PairButton",
    component: PairButton,
};

const Template: Story<PairButtonProps> = (args) => {
    return <PairButton {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    FirstButtonName: "First Button",
    SecondButtonName: "Second Button",
    onClickFirstButton: action("click-first-button"),
    onClickSecondButton: action("click-second-button"),
};

export const Invert = Template.bind({});
Invert.args = {
    FirstButtonName: "First Button",
    SecondButtonName: "Second Button",
    onClickFirstButton: action("click-first-button"),
    onClickSecondButton: action("click-second-button"),
    invert: true,
};
