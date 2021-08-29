import React from "react";

import { GetCommentsListQuery } from "src/generated/graphql";

import BoxBase from "src/components/Boxs/BoxBase";
import CommentItem from "src/components/Comments/CommentItem";
import CircularProgress from "src/components/Progress/CircularProgressBase";

import useDeleteComment from "../../hooks/useDeleteComment";
import useUpdateComment from "../../hooks/useUpdateComment";

export interface CommentListProps {
    isLoading: boolean;
    data?: GetCommentsListQuery;
    refetchCommentsHandler: () => void;
    validateCommentHandler: (content: string) => boolean;
}

const CommentList = (props: CommentListProps) => {
    const { isLoading, data, refetchCommentsHandler, validateCommentHandler } = props;
    const comments = data?.posts_by_pk?.comments ? data.posts_by_pk.comments : [];

    const { isLoading: isDeleteCommentLoading, mutate: deleteComment } = useDeleteComment(
        refetchCommentsHandler
    );
    const { isLoading: isUpdateCommentLoading, mutate: updateComment } = useUpdateComment(
        refetchCommentsHandler
    );

    return (
        <React.Fragment>
            {isLoading ? (
                <CircularProgress color="secondary" />
            ) : (
                comments.map((comment) => (
                    <BoxBase key={comment.commentId} mt={4} pl={3} pr={3}>
                        <CommentItem
                            commentId={comment.commentId}
                            authorName={comment.user!.name}
                            authorAvatar={comment.user?.avatar}
                            content={comment.content}
                            createdAt={comment.createdAt}
                            deleteCommentHandler={deleteComment}
                            isDeleteCommentLoading={isDeleteCommentLoading}
                            updateCommentHandler={updateComment}
                            isUpdateCommentLoading={isUpdateCommentLoading}
                            validateCommentHandler={validateCommentHandler}
                        />
                    </BoxBase>
                ))
            )}
        </React.Fragment>
    );
};

export default CommentList;
