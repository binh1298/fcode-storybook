import { makeStyles, Theme } from "@material-ui/core";

import TextfieldBase, { TexfieldBaseProps } from ".";

import { Story, Meta, StoryContext } from "@storybook/react";

const useStyles = makeStyles<Theme, StoryContext>((theme) => ({
    root: {
        backgroundColor: (context) =>
            context.args.color === "secondary"
                ? theme.palette.common.black
                : theme.palette.common.white,
        minHeight: "300px",
        margin: "10px",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}));

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
    decorators: [
        (Story, context) => {
            const classes = useStyles(context);
            return (
                <div className={classes.root}>
                    <Story />
                </div>
            );
        },
    ],
} as Meta;

const Template: Story<TexfieldBaseProps> = (args) => {
    return <TextfieldBase {...args} />;
};

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
