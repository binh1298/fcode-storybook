import SnackbarBase from ".";
import SnackbarProvider from "../../../context/SnackbarContext";
import { AlertBaseProps } from "../../Alerts/AlertBase";
import ButtonBase from "../../Buttons/ButtonBase";
import useSnackbar from "../useSnackbar";

import { Story, Meta } from "@storybook/react";

export default {
    title: "Components/SnackbarBase",
    component: SnackbarBase,
    decorators: [
        (Story) => {
            return (
                <SnackbarProvider>
                    <Story />
                </SnackbarProvider>
            );
        },
    ],
} as Meta;

const Template: Story<AlertBaseProps> = (args) => {
    const showSnackbar = useSnackbar();
    return (
        <ButtonBase variant="contained" color="primary" onClick={() => showSnackbar({ ...args })}>
            Click Me!
        </ButtonBase>
    );
};

export const AlertError = Template.bind({});
AlertError.args = {
    children: "This is an error alert — check it out!",
    severity: "error",
};

export const AlertWarning = Template.bind({});
AlertWarning.args = {
    children: "This is an warning alert — check it out!",
    severity: "warning",
};

export const AlertInfo = Template.bind({});
AlertInfo.args = {
    children: "This is an info alert — check it out!",
    severity: "info",
};

export const AlertSuccess = Template.bind({});
AlertSuccess.args = {
    children: "This is an success alert — check it out!",
    severity: "success",
};
