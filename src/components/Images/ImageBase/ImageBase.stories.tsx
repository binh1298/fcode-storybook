import ImageBase, { ImageBaseProps } from ".";

import { Story } from "@storybook/react";

export default {
    title: "Components/ImageBase",
    component: ImageBase,
};

const anonymousAvatarLink =
    "https://cdn1.vectorstock.com/i/thumb-large/22/05/male-profile-picture-vector-1862205.jpg";

const source = "https://res.cloudinary.com/dq7l8216n/image/upload/v1620235303/FCode-Avatar.png";

const Template: Story<ImageBaseProps> = (args) => <ImageBase {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    src: source,
    onErrorSrc: anonymousAvatarLink,
    width: 100,
    height: 100,
};

export const Error = Template.bind({});
Error.args = {
    src: "abc",
    onErrorSrc: anonymousAvatarLink,
    width: 100,
    height: 100,
    borderRadius: "50%",
};
