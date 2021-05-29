import { Add as AddIcon, Edit as EditIcon } from "@material-ui/icons";

import IconButtonBase, { IconButtonBaseProps } from ".";

import { Story } from "@storybook/react";

export default {
    title: "Components/IconButtonBase",
    component: IconButtonBase,
};

const Template: Story<IconButtonBaseProps> = (args) => <IconButtonBase {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <AddIcon />,
    color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: <EditIcon />,
    color: "secondary",
};
