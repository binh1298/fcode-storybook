import BoxBase from "src/components/Boxs/BoxBase";
import ButtonBase from "src/components/Buttons/ButtonBase";
import RichEditorBase from "src/components/RichEditor/RichEditorBase";
import TextFieldBase from "src/components/Textfields/TextFieldBase";

interface PostEditorProps {
    content: string;
    title: string;
    onSave: () => void;
    onCancel: () => void;
}

const PostEditor = (props: PostEditorProps) => {
    const { content, title, onSave, onCancel } = props;
    return (
        <BoxBase p={1}>
            <TextFieldBase label="Title" fullWidth variant="outlined" defaultValue={title} />

            <RichEditorBase initContent={content} />

            <BoxBase pt={2} width={1} display="flex" justifyContent="flex-end">
                <BoxBase mr={1}>
                    <ButtonBase variant="contained" color="primary" onClick={onSave}>
                        Save
                    </ButtonBase>
                </BoxBase>
                <BoxBase>
                    <ButtonBase variant="contained" color="secondary" onClick={onCancel}>
                        Cancel
                    </ButtonBase>
                </BoxBase>
            </BoxBase>
        </BoxBase>
    );
};

export default PostEditor;
