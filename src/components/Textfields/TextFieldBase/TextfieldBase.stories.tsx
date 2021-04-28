import TextfieldBase, { TexfieldBaseProps } from ".";

import { Story } from "@storybook/react";

export default {
    title: "Components/TextfieldBase",
    component: TextfieldBase,
};

const Template: Story<TexfieldBaseProps> = (args) => <TextfieldBase {...args} />;

export const Standard = Template.bind({});
Standard.args = {
    label: "Hello World",
    variant: "standard",
};

export const Outlined = Template.bind({});
Outlined.args = {
    label: "Hello World",
    variant: "outlined",
};

export const Filled = Template.bind({});
Filled.args = {
    label: "Hello World",
    variant: "filled",
};
