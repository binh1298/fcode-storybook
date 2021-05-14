import { TextField } from "@material-ui/core";

import AutocompleteBase, { AutocompleteBaseProps } from ".";

import { Story } from "@storybook/react";

const options = [
    { title: "Thien Duc" },
    { title: "Kien Tran" },
    { title: "Binh Pham" },
    { title: "Thanh Binh" },
];

export default {
    title: "Components/AutocompleteBase",
    component: AutocompleteBase,
};

const Template: Story<AutocompleteBaseProps> = (args) => {
    return <AutocompleteBase {...args} />;
};
export const Basic = Template.bind({});
Basic.args = {
    options: options,
    getOptionLabel: (option: any) => option.title,
    renderInput: (params) => <TextField {...params} label="Name" variant="outlined" />,
    style: { width: 300 },
};
export const MultiValue = Template.bind({});
MultiValue.args = {
    multiple: true,
    options: options,
    getOptionLabel: (option: any) => option.title,
    renderInput: (params) => <TextField {...params} label="Name" variant="standard" />,
    style: { width: "50%" },
};
