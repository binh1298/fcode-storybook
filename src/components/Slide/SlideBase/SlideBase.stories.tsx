import React, { useState } from "react";

import AlertBase from "src/components/Alerts/AlertBase";
import BoxBase from "src/components/Boxs/BoxBase";
import ButtonBase from "src/components/Buttons/ButtonBase";

import SlideBase, { SlideBaseProps } from ".";

import { Story } from "@storybook/react";

export default {
    title: "Components/SlideBase",
    component: SlideBase,
};

const Template: Story<SlideBaseProps> = (args) => {
    const [isDisplay, setDisplay] = useState<boolean>(false);
    return (
        <React.Fragment>
            <ButtonBase variant="contained" color="primary" onClick={() => setDisplay(!isDisplay)}>
                Click Me!
            </ButtonBase>
            <BoxBase
                height={500}
                alignItems="flex-end"
                width={1}
                display="flex"
                justifyContent="center"
            >
                <BoxBase width={2 / 5}>
                    <SlideBase {...args} in={isDisplay} />
                </BoxBase>
            </BoxBase>
        </React.Fragment>
    );
};

export const DirectionUp = Template.bind({});
DirectionUp.args = {
    children: (
        <AlertBase color="success" variant="filled">
            Go Up!
        </AlertBase>
    ),
    direction: "up",
};

export const DirectionDown = Template.bind({});
DirectionDown.args = {
    children: (
        <AlertBase color="success" variant="filled">
            Go Down!
        </AlertBase>
    ),
    direction: "down",
};

export const DirectionLeft = Template.bind({});
DirectionLeft.args = {
    children: (
        <AlertBase color="success" variant="filled">
            Go To Left!
        </AlertBase>
    ),
    direction: "left",
};

export const DirectionRight = Template.bind({});
DirectionRight.args = {
    children: (
        <AlertBase color="success" variant="filled">
            Go To Right!
        </AlertBase>
    ),
    direction: "right",
};
