import { useState } from "react";

import BoxBase from "src/components/Boxs/BoxBase";
import TypographyBase from "src/components/Typography/TypographyBase";

import RichEditorBase, { RichEditorBaseProps } from ".";

import { Meta, Story } from "@storybook/react";

export default {
    title: "Components/RichEditorBase",
    component: RichEditorBase,
} as Meta;

const Template: Story<RichEditorBaseProps> = (args) => {
    const [value, setValue] = useState<string>("");
    const getEditorValue = (content: string) => {
        setValue(content);
    };
    const { getValue, ...rest } = args;
    return (
        <BoxBase width={1} display="flex">
            <BoxBase width={1 / 2} p={1} m={1}>
                <RichEditorBase getValue={getEditorValue} {...rest} />
            </BoxBase>
            <BoxBase width={1 / 2} p={1} m={1}>
                <TypographyBase variant="h6">Content: </TypographyBase>
                <TypographyBase variant="body1">{value}</TypographyBase>
            </BoxBase>
        </BoxBase>
    );
};

const stringDemo = `{"blocks":[{"key":"9nug1","text":"xxxxx","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"8k9v8","text":"H3H4","type":"header-one","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3ilid","text":"1","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"ef9a4","text":"2","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"7ua5j","text":"3 ","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"ajnn1","text":"cccc","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"39ki6","text":"😗","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`;

export const Placeholder = Template.bind({});
Placeholder.args = {
    placeholder: "This is placeholder",
};

export const HasInitValue = Template.bind({});
HasInitValue.args = {
    initContent: stringDemo,
};

export const Height = Template.bind({});
Height.args = {
    height: 500,
    placeholder: "Height: 500px",
};
