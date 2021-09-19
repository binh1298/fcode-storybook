import { gql } from "graphql-request";
import { UseMutationOptions } from "react-query";
import { DeleteCommentMutation, DeleteCommentMutationVariables } from "src/generated/graphql";

import useMutation from "src/hooks/useMutation";

const useDeleteComment = (
    options?: UseMutationOptions<DeleteCommentMutation, unknown, DeleteCommentMutationVariables>
) => {
    return useMutation<DeleteCommentMutation, DeleteCommentMutationVariables>({
        queryKey: ["DeleteComment"],
        query: gql`
            mutation DeleteComment($commentId: uuid!) {
                delete_comments_by_pk(commentId: $commentId) {
                    postId
                }
            }
        `,
        options,
    });
};

export default useDeleteComment;
