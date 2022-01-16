import React from "react";

import ButtonGroupBase, { ButtonGroupBaseProps } from ".";
import ButtonBase from "../../Buttons/ButtonBase";

import { Story } from "@storybook/react";

export default {
    title: "Components/ButtonGroups/ButtonGroupBase",
    subcomponents: {
        ButtonBase,
    },
    component: ButtonGroupBase,
};

const Template: Story<ButtonGroupBaseProps> = (args) => <ButtonGroupBase {...args} />;

export const ContainedButtonGroup = Template.bind({});
ContainedButtonGroup.args = {
    children: (
        <React.Fragment>
            <ButtonBase variant="contained" color="primary">
                One
            </ButtonBase>
            <ButtonBase variant="contained" color="secondary">
                Two
            </ButtonBase>
            <ButtonBase variant="contained" color="primary">
                Three
            </ButtonBase>
        </React.Fragment>
    ),
    variant: "contained",
};

export const OutlinedButtonGroup = Template.bind({});
OutlinedButtonGroup.args = {
    children: (
        <React.Fragment>
            <ButtonBase variant="outlined" color="primary">
                One
            </ButtonBase>
            <ButtonBase variant="outlined" color="secondary">
                Two
            </ButtonBase>
            <ButtonBase variant="outlined" color="primary">
                Three
            </ButtonBase>
        </React.Fragment>
    ),
    variant: "outlined",
};

export const TextButtonGroup = Template.bind({});
TextButtonGroup.args = {
    children: (
        <React.Fragment>
            <ButtonBase variant="text" color="primary">
                One
            </ButtonBase>
            <ButtonBase variant="text" color="secondary">
                Two
            </ButtonBase>
            <ButtonBase variant="text" color="primary">
                Three
            </ButtonBase>
        </React.Fragment>
    ),
    variant: "text",
};