import TypographyBase, { TypographyBaseProps } from ".";

import { Story } from "@storybook/react";

export default {
    title: "Components/TypographyBase",
    component: TypographyBase,
};

const Template: Story<TypographyBaseProps> = (args) => <TypographyBase {...args} />;

export const Headline1 = Template.bind({});
Headline1.args = {
    children: "H1 Headline",
    variant: "h1",
};

export const Headline2 = Template.bind({});
Headline2.args = {
    children: "H2 Headline",
    variant: "h2",
};

export const Headline3 = Template.bind({});
Headline3.args = {
    children: "H3 Headline",
    variant: "h3",
};

export const Headline4 = Template.bind({});
Headline4.args = {
    children: "H4 Headline",
    variant: "h4",
};

export const Headline5 = Template.bind({});
Headline5.args = {
    children: "H5 Headline",
    variant: "h5",
};

export const Headline6 = Template.bind({});
Headline6.args = {
    children: "H6 Headline",
    variant: "h6",
};

export const Subtitle1 = Template.bind({});
Subtitle1.args = {
    children: "Subtitle 1",
    variant: "subtitle1",
};

export const Subtitle2 = Template.bind({});
Subtitle2.args = {
    children: "Subtitle 2",
    variant: "subtitle2",
};

export const Body1 = Template.bind({});
Body1.args = {
    children: "Body 1",
    variant: "body1",
};

export const Body2 = Template.bind({});
Body2.args = {
    children: "Body 2",
    variant: "body2",
};

export const Button = Template.bind({});
Button.args = {
    children: "Button",
    variant: "button",
};

export const Caption = Template.bind({});
Caption.args = {
    children: "Caption",
    variant: "caption",
};

export const Overline = Template.bind({});
Overline.args = {
    children: "OVERLINE",
    variant: "overline",
};
