import ButtonBase, { ButtonBaseProps } from ".";
import {Add as AddIcon, Edit as EditIcon} from "@material-ui/icons";
import { Story } from "@storybook/react";

//👇 This default export determines where your story goes in the story list
export default {
    title: "Components/ButtonBase",
    component: ButtonBase,
};

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonBaseProps> = (args) => <ButtonBase {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: "Compose",
    color: "primary",
    startIcon: <AddIcon/>,
    style: {borderRadius: "50em"},
    variant: "contained",
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: "Compose",
    color: "secondary",
    startIcon: <EditIcon/>,
    style: {borderRadius: "50em"},
    variant: "contained",
};

export const FabPrimary = Template.bind({});
FabPrimary.args = {
    children: <AddIcon/>,
    color: "primary",
    style: {
        borderRadius: "50%",
    },
    variant: "contained",
}