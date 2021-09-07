import { useState } from "react";
import { ChangeEventHandler } from "react";

import { Send as SendIcon } from "@material-ui/icons";

import BoxBase from "../../Boxs/BoxBase";
import ButtonBase from "../../Buttons/ButtonBase";
import TextFieldBase from "../../Textfields/TextFieldBase";

export interface CommentFormProps {
    isLoading?: boolean;
    value?: string;
    submit: (content: string) => void;
    validate?: (content: string) => boolean;
}

const CommentForm = (props: CommentFormProps) => {
    const { isLoading, value, submit, validate } = props;
    const [content, setContent] = useState<string>(value || "");

    const changeHandler: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setContent(event.target.value);
    };

    const submitHandler = () => {
        if (!validate || validate(content)) {
            submit(content);
            setContent("");
        }
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
                    variant="contained"
                    type="submit"
                    endIcon={isLoading ? null : <SendIcon />}
                    isLoading={isLoading}
                    onClick={submitHandler}
                >
                    Submit
                </ButtonBase>
            </BoxBase>
        </BoxBase>
    );
};

export default CommentForm;
