import { useEffect, useState } from "react";

import { ContentState, convertFromRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

import BoxBase from "../BoxBase";

export interface BoxConverterProps {
    input: string;
}

function IsJsonString(str: string) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

const BoxConvertDraftjsToHtml = (props: BoxConverterProps) => {
    const [editor, setEditor] = useState<EditorState>(() => EditorState.createEmpty());

    useEffect(() => {
        if (IsJsonString(props.input)) {
            setEditor(() => EditorState.createWithContent(convertFromRaw(JSON.parse(props.input))));
        } else {
            let content = ContentState.createFromText(props.input);
            setEditor(() => EditorState.createWithContent(content));
        }
    }, [props.input]);
    return (
        <BoxBase width={1}>
            <Editor readOnly={true} editorState={editor} toolbarHidden />
        </BoxBase>
    );
};

export default BoxConvertDraftjsToHtml;
