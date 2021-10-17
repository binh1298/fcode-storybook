import AvatarBase, { AvatarBaseProps } from ".";

import { Story } from "@storybook/react";

export default {
    title: "Components/AvatarBase",
    component: AvatarBase,
};

const Template: Story<AvatarBaseProps> = (args) => <AvatarBase {...args} />;

const source = "https://res.cloudinary.com/dq7l8216n/image/upload/v1620235303/FCode-Avatar.png";

export const ImageAvatar = Template.bind({});
ImageAvatar.args = {
    alt: "Fcode avatar",
    src: source,
};

export const ImageAvatarSmall = Template.bind({});
ImageAvatarSmall.args = {
    size: "small",
    alt: "Fcode avatar",
    src: source,
};

export const ImageAvatarLarge = Template.bind({});
ImageAvatarLarge.args = {
    size: "large",
    alt: "Fcode avatar",
    src: source,
};
