import Content, { IContentProps } from ".";

import { Story, Meta } from "@storybook/react";

export default {
    title: "Components/UserCard/Content",
    component: Content,
} as Meta;

const Template: Story<IContentProps> = (args) => {
    return <Content {...args} />;
};

export const Normal = Template.bind({});
Normal.args = {
    email: "binhtt@gmail.com",
    name: "Thanh Bình",
};
