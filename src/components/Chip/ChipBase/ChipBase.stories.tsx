import SchoolIcon from "@mui/icons-material/School";
import { Avatar } from "@mui/material";

import ChipBase, { ChipBaseProps } from ".";

import { Story } from "@storybook/react";

export default {
    title: "Components/ChipBase",
    component: ChipBase,
};
const avatarLink = "https://res.cloudinary.com/dq7l8216n/image/upload/v1620235303/FCode-Avatar.png";
const Template: Story<ChipBaseProps> = (args) => <ChipBase {...args} />;

export const IconChip = Template.bind({});
IconChip.args = {
    label: "F-Code",
    icon: <SchoolIcon />,
};

export const AvatarChip = Template.bind({});
AvatarChip.args = {
    label: "F-Code",
    avatar: <Avatar src={avatarLink} />,
};
