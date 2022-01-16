import UserCard, { IUserProps } from ".";

import { Story } from "@storybook/react";

export default {
    title: "Components/UserCard",
    component: UserCard,
};

const Template: Story<IUserProps> = (args) => {
    return <UserCard {...args} />;
};

export const HaveAvatar = Template.bind({});
HaveAvatar.args = {
    name: "Thanh Bình",
    email: "binhtt.13122000@gmail.com",
    isActive: true,
    avatar: "https://yolo.vn/wp-content/uploads/2019/08/hinh-anh-cho-pomsky-dep-45.jpg",
};

export const NoHaveAvatar = Template.bind({});
NoHaveAvatar.args = {
    name: "Thanh Bình",
    email: "binhtt.13122000@gmail.com",
    isActive: false,
};
