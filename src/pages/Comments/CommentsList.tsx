import React from "react";

import { GetCommentsQuery } from "src/generated/graphql";

import BoxBase from "src/components/Boxs/BoxBase";
import CommentItem from "src/components/Comments/CommentItem";
import CircularProgress from "src/components/Progress/CircularProgressBase";

import useDeleteComment from "./hooks/useDeleteComment";
import useUpdateComment from "./hooks/useUpdateComment";

export interface CommentListProps {
    isLoading: boolean;
    data?: GetCommentsQuery;
    refetchCommentsHandler: () => void;
}

const CommentList = (props: CommentListProps) => {
    const { isLoading, data, refetchCommentsHandler } = props;
    const comments = data?.comments ? data.comments : [];

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
                        />
                    </BoxBase>
                ))
            )}
        </React.Fragment>
    );
};

export default CommentList;
