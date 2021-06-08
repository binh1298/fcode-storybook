import { Add as AddIcon, Edit as EditIcon } from "@material-ui/icons";

import FabBase, { FabBaseProps } from ".";

import { Story } from "@storybook/react";

export default {
    title: "Components/Button/FabBase",
    component: FabBase,
};

const Template: Story<FabBaseProps> = (args) => <FabBase {...args} />;

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
