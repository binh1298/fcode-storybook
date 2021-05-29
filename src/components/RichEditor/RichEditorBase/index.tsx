import { useEffect, useRef, useState } from "react";

import { EditorState, convertToRaw, RawDraftContentState, convertFromRaw } from "draft-js";
import { Editor, EditorProps } from "react-draft-wysiwyg";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export interface RichEditorBaseProps extends EditorProps {
    placeholder?: string;
    initContent?: string;
    getValue?: (content: string) => void;
    loading?: boolean;
    height?: number;
}

const RichEditorBase = (props: RichEditorBaseProps) => {
    const editorRef = useRef<HTMLInputElement>();

    useEffect(() => {
        if (editorRef.current) {
            editorRef.current.focus();
        }
    }, []);

    const editorStyles = {
        height: props.height ? `${props.height}px` : "200px",
    };
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

    if (props.loading) {
        return <div>Is loading</div>;
    }
    return (
        <Editor
            editorRef={(ref: HTMLInputElement) => (editorRef.current = ref)}
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            editorStyle={editorStyles}
            placeholder={props.placeholder}
        />
    );
};

export default RichEditorBase;
