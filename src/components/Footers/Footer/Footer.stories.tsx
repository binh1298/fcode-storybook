import Footer, { FooterProps } from ".";

import { Story } from "@storybook/react";

export default {
    title: "Components/Footer",
    component: Footer,
};

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
    bgcolor: "secondary",
};
