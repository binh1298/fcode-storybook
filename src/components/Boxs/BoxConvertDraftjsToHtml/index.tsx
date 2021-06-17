import { useEffect, useState } from "react";

import { convertFromRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

import BoxBase from "../BoxBase";

export interface BoxConverterProps {
    input: string;
}

function IsJsonString(str: string) {
    try {
        JSON.parse(str);
    } catch (e) {
        return "";
    }
    return str;
}

const BoxConvertDraftjsToHtml = (props: BoxConverterProps) => {
    const [editor, setEditor] = useState<EditorState>(() => EditorState.createEmpty());

    useEffect(() => {
        if (IsJsonString(props.input) !== "") {
            setEditor(() => EditorState.createWithContent(convertFromRaw(JSON.parse(props.input))));
        }
    }, [props.input]);
    return (
        <BoxBase width={1}>
            <Editor readOnly={true} editorState={editor} toolbarHidden />
        </BoxBase>
    );
};

export default BoxConvertDraftjsToHtml;
