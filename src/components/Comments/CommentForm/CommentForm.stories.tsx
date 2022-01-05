import CommentForm, { CommentFormProps } from ".";

import { action } from "@storybook/addon-actions";
import { Story } from "@storybook/react";

export default {
    title: "Components/CommentForm",
    component: CommentForm,
};

const Template: Story<CommentFormProps> = (args) => <CommentForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isLoading: false,
    submit: action("submit-comment"),
};
