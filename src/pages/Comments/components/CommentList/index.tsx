import React from "react";

import { GetCommentsListQuery } from "src/generated/graphql";

import CommentItem from "src/components/Comments/CommentItem";
import GridBase from "src/components/Grids";
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
    const comments = data?.posts_by_pk?.comments || [];

    const { isLoading: isDeleteCommentLoading, mutate: deleteComment } = useDeleteComment({
        onSuccess: () => {
            refetchCommentsHandler();
        },
    });
    const { isLoading: isUpdateCommentLoading, mutate: updateComment } = useUpdateComment({
        onSuccess: () => {
            refetchCommentsHandler();
        },
    });

    return (
        <React.Fragment>
            {isLoading ? (
                <CircularProgress color="secondary" />
            ) : (
                <GridBase container spacing={3}>
                    {comments.map((comment) => (
                        <GridBase key={comment.commentId} item xs={12} sm={10} lg={8}>
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
                        </GridBase>
                    ))}
                </GridBase>
            )}
        </React.Fragment>
    );
};

export default CommentList;
