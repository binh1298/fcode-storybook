import { Add as AddIcon, Edit as EditIcon } from "@mui/icons-material";

import ButtonBase, { ButtonBaseProps } from ".";

import { Story } from "@storybook/react";

export default {
    title: "Components/Buttons/ButtonBase",
    component: ButtonBase,
};

const Template: Story<ButtonBaseProps> = (args) => <ButtonBase {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: "Compose",
    color: "primary",
    startIcon: <AddIcon />,
    variant: "contained",
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: "Compose",
    color: "secondary",
    startIcon: <EditIcon />,
    variant: "contained",
};

export const Loading = Template.bind({});
Loading.args = {
    children: "Compose",
    color: "primary",
    variant: "contained",
    isLoading: true,
};
