import { Add as AddIcon, Edit as EditIcon } from "@material-ui/icons";

import IconButton, { FabBaseProps } from ".";

import { Story } from "@storybook/react";

export default {
    title: "Components/IconButton",
    component: IconButton,
};

const Template: Story<FabBaseProps> = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <AddIcon />,
    color: "primary",
    variant: "round",
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: <EditIcon />,
    color: "secondary",
    variant: "round",
};
