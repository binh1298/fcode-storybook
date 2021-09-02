import { useState } from "react";

import { Grid } from "@material-ui/core";
import { Edit as EditIcon, Delete as DeleteIcon } from "@material-ui/icons";

import AvatarBase from "../../Avatars/AvatarBase";
import BoxBase from "../../Boxs/BoxBase";
import ButtonBase from "../../Buttons/ButtonBase";
import DividerBase from "../../Dividers/DividerBase";
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
    validateCommentHandler: (content: string) => boolean;
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
        <Grid container alignItems="center">
            <Grid item xs={11} sm={10} md={9}>
                <DividerBase isHighlighted />
                <BoxBase display="flex">
                    <DividerBase orientation="vertical" flexItem isHighlighted />
                    <BoxBase
                        flexGrow={1}
                        display="flex"
                        flexDirection="column"
                        ml={4}
                        mt={3}
                        mb={1}
                    >
                        <BoxBase
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            pb={2}
                        >
                            <BoxBase display="flex" alignItems="center">
                                <BoxBase mr={1}>
                                    <AvatarBase
                                        data-testid="CommentItem__avatar"
                                        src={authorAvatar ? authorAvatar : defaultAvatarSrc}
                                    />
                                </BoxBase>
                                <BoxBase display="flex" flexDirection="column">
                                    <TypographyBase component="div" variant="body2">
                                        <BoxBase
                                            fontWeight="fontWeightBold"
                                            data-testid="CommentItem__author"
                                        >
                                            {authorName}
                                        </BoxBase>
                                        <BoxBase data-testid="CommentItem__createdAt">
                                            {commentCreatedTime}
                                        </BoxBase>
                                    </TypographyBase>
                                </BoxBase>
                            </BoxBase>
                            <BoxBase
                                display="flex"
                                flexDirection="row"
                                ml={2}
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
                                    onClick={deleteHandler}
                                    disabled={isDeleteCommentLoading}
                                >
                                    Delete
                                </ButtonBase>
                            </BoxBase>
                        </BoxBase>
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
                            <TypographyBase data-testid="CommentItem__content">
                                {content}
                            </TypographyBase>
                        )}
                    </BoxBase>
                </BoxBase>
            </Grid>
        </Grid>
    );
};

export default CommentItem;
