import { useState } from "react";

import { CardContent } from "@material-ui/core";
import { Edit as EditIcon, Delete as DeleteIcon } from "@material-ui/icons";
import CardHeaderBase from "src/components/CardHeaders/CardHeaderBase";
import CardBase from "src/components/Cards/CardBase";

import AvatarBase from "../../Avatars/AvatarBase";
import BoxBase from "../../Boxs/BoxBase";
import ButtonBase from "../../Buttons/ButtonBase";
import TypographyBase from "../../Typography/TypographyBase";
import CommentForm from "../CommentForm";

export interface CommentItemProps {
    commentId: string;
    authorName: string;
    authorAvatar?: string | null;
    content: string;
    createdAt: string;
    deleteCommentHandler: (props: { commentId: string }) => void;
    isDeleteCommentLoading?: boolean;
    updateCommentHandler: (props: { commentId: string; content: string }) => void;
    isUpdateCommentLoading?: boolean;
    validateCommentHandler?: (content: string) => boolean;
}

export const defaultAvatarSrc =
    "https://www.gravatar.com/avatar/d7465b8fce04fd17a376618ba1eb8ddc.jpg?d=https%3A//d2mcnjhkvrfuy2.cloudfront.net/static/images/avatar_default.png&s=64";

const CommentItem = (props: CommentItemProps) => {
    const {
        commentId,
        authorName,
        authorAvatar,
        content,
        createdAt,
        deleteCommentHandler,
        isDeleteCommentLoading,
        updateCommentHandler,
        isUpdateCommentLoading,
        validateCommentHandler,
    } = props;

    const [isEdit, setIsEdit] = useState<boolean>(false);

    const deleteHandler = () => {
        deleteCommentHandler({ commentId });
    };
    const updateHandler = (content: string) => {
        updateCommentHandler({ commentId, content });
        setIsEdit(false);
    };

    const timeStamp = new Date(
        new Date(createdAt).getTime() - new Date(createdAt).getTimezoneOffset() * 60 * 1000
    );
    const commentCreatedTime =
        timeStamp.toLocaleString("en-US", { dateStyle: "short" }) +
        " AT " +
        timeStamp.toLocaleString("en-US", { hour: "2-digit", minute: "2-digit" });

    return (
        <CardBase elevation={2}>
            <CardHeaderBase
                avatar={
                    <AvatarBase
                        data-testid="CommentItem__avatar"
                        src={authorAvatar || defaultAvatarSrc}
                    />
                }
                title={authorName}
                subheader={commentCreatedTime}
                action={
                    <BoxBase
                        display="flex"
                        flexDirection="row"
                        px={2}
                        py={1}
                        data-testid="CommentItem__buttons"
                    >
                        <ButtonBase
                            size="small"
                            color="secondary"
                            startIcon={<EditIcon />}
                            variant="contained"
                            onClick={() => setIsEdit(!isEdit)}
                        >
                            Edit
                        </ButtonBase>
                        <ButtonBase
                            size="small"
                            color="primary"
                            startIcon={<DeleteIcon />}
                            variant="contained"
                            isLoading={isDeleteCommentLoading}
                            onClick={deleteHandler}
                        >
                            Delete
                        </ButtonBase>
                    </BoxBase>
                }
            />
            <CardContent>
                {isEdit ? (
                    <BoxBase data-testid="CommentItem__commentForm">
                        <CommentForm
                            isLoading={isUpdateCommentLoading}
                            value={content}
                            submit={updateHandler}
                            validate={validateCommentHandler}
                        />
                    </BoxBase>
                ) : (
                    <TypographyBase data-testid="CommentItem__content">{content}</TypographyBase>
                )}
            </CardContent>
        </CardBase>
    );
};

export default CommentItem;
