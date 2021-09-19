import { ChangeEventHandler, useState } from "react";

import BoxBase from "src/components/Boxes/BoxBase";
import ButtonBase from "src/components/Buttons/ButtonBase";
import RichEditorBase from "src/components/RichEditor/RichEditorBase";
import TextFieldBase from "src/components/Textfields/TextFieldBase";

interface PostEditorProps {
    content?: string | "";
    title?: string | "";
    onSave: (content: string, title: string) => void;
    onCancel?: () => void;
    type: "update" | "insert";
}

const PostEditor = (props: PostEditorProps) => {
    const { content, title, onSave, onCancel, type } = props;
    const [value, setValue] = useState<string>(content || "");
    const [newTitle, setNewTitle] = useState<string>(title || "");
    const getEditorValue = (content: string) => {
        setValue(content);
    };

    const changeHandler: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setNewTitle(event.target.value);
    };
    const handleSave = () => {
        onSave(value, newTitle);
    };
    return (
        <BoxBase p={1} bgcolor="common">
            <TextFieldBase
                label="Title"
                fullWidth
                variant="outlined"
                defaultValue={title}
                onChange={changeHandler}
            />

            <RichEditorBase initContent={content} getValue={getEditorValue} />

            <BoxBase pt={2} width={1} display="flex" justifyContent="flex-end">
                {type == "update" && (
                    <BoxBase mr={1}>
                        <ButtonBase variant="contained" color="secondary" onClick={onCancel}>
                            Cancel
                        </ButtonBase>
                    </BoxBase>
                )}
                <BoxBase mr={1}>
                    <ButtonBase variant="contained" color="primary" onClick={handleSave}>
                        {type == "update" ? "Save" : "Submit"}
                    </ButtonBase>
                </BoxBase>
            </BoxBase>
        </BoxBase>
    );
};

export default PostEditor;
