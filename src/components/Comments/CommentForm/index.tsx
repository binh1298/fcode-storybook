import React, { useState } from "react";
import { ChangeEventHandler } from "react";

import { Send as SendIcon } from "@material-ui/icons";

import BoxBase from "../../Boxs/BoxBase";
import ButtonBase from "../../Buttons/ButtonBase";
import TextFieldBase from "../../Textfields/TextFieldBase";

export interface CommentFormProps {
    isLoading?: boolean;
    value?: string;
    submit: (content: string) => void;
}

const CommentForm = (props: CommentFormProps) => {
    const { isLoading, value, submit } = props;
    const [content, setContent] = useState(value ? value : "");

    const changeHandler: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setContent(event.target.value);
    };

    const submitHandler = () => {
        submit(content);
        setContent("");
    };

    return (
        <BoxBase data-testid="CommentForm__root">
            <TextFieldBase
                multiline
                rows={5}
                rowsMax={20}
                label="Enter your comment here"
                variant="outlined"
                fullWidth
                value={content}
                onChange={changeHandler}
                disabled={isLoading}
            />
            <BoxBase display="flex" justifyContent="flex-end" mt={2}>
                <ButtonBase
                    color="primary"
                    endIcon={isLoading ? null : <SendIcon />}
                    variant="contained"
                    type="submit"
                    disabled={isLoading}
                    onClick={submitHandler}
                >
                    Submit{isLoading ? "..." : null}
                </ButtonBase>
            </BoxBase>
        </BoxBase>
    );
};

export default CommentForm;
