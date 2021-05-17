import AutocompleteBase, { AutocompleteBaseProps } from ".";
import TextField from "../../Textfields/TextFieldBase";

import { Story } from "@storybook/react";

interface UserInfo {
    name: string;
}

const options: UserInfo[] = [
    { name: "Thien Duc" },
    { name: "Kien Tran" },
    { name: "Binh Pham" },
    { name: "Thanh Binh" },
];

export default {
    title: "Components/AutocompleteBase",
    component: AutocompleteBase,
};

const Template: Story<AutocompleteBaseProps<UserInfo>> = (args) => {
    return <AutocompleteBase {...args} />;
};
export const Basic = Template.bind({});
Basic.args = {
    options: options,
    getOptionLabel: (option) => option.name,
    renderInput: (params) => <TextField {...params} label="Name" variant="outlined" />,
    style: { width: 300 },
};
export const MultiValue = Template.bind({});
MultiValue.args = {
    multiple: true,
    options: options,
    getOptionLabel: (option) => option.name,
    renderInput: (params) => <TextField {...params} label="Name" variant="standard" />,
    style: { width: "50%" },
};
