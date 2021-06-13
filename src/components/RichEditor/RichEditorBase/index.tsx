import { useEffect, useRef, useState } from "react";

import { EditorState, convertToRaw, RawDraftContentState, convertFromRaw } from "draft-js";
import { Editor, EditorProps } from "react-draft-wysiwyg";

import BoxBase from "src/components/Boxs/BoxBase";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export interface RichEditorBaseProps extends EditorProps {
    placeholder?: string;
    initContent?: string;
    getValue?: (content: string) => void;
    height?: number;
    focus?: boolean;
}

const RichEditorBase = (props: RichEditorBaseProps) => {
    const editorRef = useRef<HTMLInputElement>();

    useEffect(() => {
        if (editorRef.current && props.focus) {
            editorRef.current.focus();
        }
    }, [props.focus]);

    const setDefaultValue = (initString?: string) => {
        if (!initString) {
            return () => EditorState.createEmpty();
        } else {
            return () => EditorState.createWithContent(convertFromRaw(JSON.parse(initString)));
        }
    };
    const [editorState, setEditorState] = useState<EditorState>(setDefaultValue(props.initContent));

    const onEditorStateChange = (editorState: EditorState) => {
        setEditorState(editorState);
        const content: RawDraftContentState = convertToRaw(editorState.getCurrentContent());
        if (props.getValue) {
            props.getValue(JSON.stringify(content));
        }
    };

    return (
        <BoxBase
            shouldHaveBorder
            boxSizing="border-box"
            p={1}
            minHeight={props.height}
            aria-label="draft-border"
        >
            <Editor
                editorRef={(ref: HTMLInputElement) => (editorRef.current = ref)}
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                placeholder={props.placeholder}
            />
        </BoxBase>
    );
};

export default RichEditorBase;
