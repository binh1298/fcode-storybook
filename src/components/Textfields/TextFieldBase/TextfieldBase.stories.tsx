import TextfieldBase, { TexfieldBaseProps } from ".";

import { Story, Meta } from "@storybook/react";

export default {
    title: "Components/TextfieldBase",
    component: TextfieldBase,
} as Meta;

const Template: Story<TexfieldBaseProps> = (args) => {
    return <TextfieldBase {...args} />;
};

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
