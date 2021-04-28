import TextfieldBase, { TexfieldBaseProps } from ".";

import { Story } from "@storybook/react";

export default {
    title: "Components/TextfieldBase",
    component: TextfieldBase,
    argTypes: {
        color: {
            control: {
                type: "radio",
                options: ["primary", "secondary"],
            },
        },
    },
};

const Template: Story<TexfieldBaseProps> = (args) => <TextfieldBase {...args} />;

export const Standard = Template.bind({});
Standard.args = {
    label: "Hello World",
    variant: "standard",
    color: "primary",
};

export const Outlined = Template.bind({});
Outlined.args = {
    label: "Hello World",
    variant: "outlined",
    color: "primary",
};

export const Filled = Template.bind({});
Filled.args = {
    label: "Hello World",
    variant: "filled",
    color: "primary",
};
