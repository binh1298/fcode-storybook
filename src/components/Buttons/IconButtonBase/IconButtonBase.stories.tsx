import { Add as AddIcon, Edit as EditIcon } from "@material-ui/icons";

import IconButtonBase, { FabBaseProps } from ".";

import { Story } from "@storybook/react";

export default {
    title: "Components/IconButtonBase",
    component: IconButtonBase,
};

const Template: Story<FabBaseProps> = (args) => <IconButtonBase {...args} />;

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
