import FooterBase, { FooterBaseProps } from ".";

import { Story } from "@storybook/react";

export default {
    title: "Components/FooterBase",
    component: FooterBase,
};

const Template: Story<FooterBaseProps> = (args) => <FooterBase {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
    bgcolor: "secondary",
};
