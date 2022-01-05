import BoxBase from "src/components/Boxes/BoxBase";

import CommentItem, { CommentItemProps } from ".";

import { action } from "@storybook/addon-actions";
import { Story } from "@storybook/react";

export default {
    title: "Components/CommentItem",
    component: CommentItem,
    subcomponents: {
        BoxBase,
    },
};

const Template: Story<CommentItemProps> = (args) => (
    <BoxBase width={480}>
        <CommentItem {...args} />
    </BoxBase>
);

const fcodeAvatarSrc =
    "https://res.cloudinary.com/dq7l8216n/image/upload/v1620235303/FCode-Avatar.png";

export const Primary = Template.bind({});
Primary.args = {
    commentId: "commentId",
    authorName: "F-Code",
    authorAvatar: fcodeAvatarSrc,
    content: "This is the coolest components ever!",
    createdAt: "27 Aug 2014 17:00:00 GMT+7",
    deleteCommentHandler: action("delete-comment"),
    updateCommentHandler: action("update-comment"),
};
