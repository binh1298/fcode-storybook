import AvatarBase, { AvatarBaseProps } from ".";

import { Story } from "@storybook/react";

export default {
    title: "Components/AvatarBase",
    component: AvatarBase,
};

const Template: Story<AvatarBaseProps> = (args) => <AvatarBase {...args} />;

export const ImageAvatar = Template.bind({});
ImageAvatar.args = {
    alt: "Fcode avatar",
    src: "https://res.cloudinary.com/dq7l8216n/image/upload/v1620235303/FCode-Avatar.png",
};
