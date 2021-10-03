import { gql } from "graphql-request";
import { UseMutationOptions } from "react-query";
import { UpdateCommentMutation, UpdateCommentMutationVariables } from "src/generated/graphql";

import useMutation from "src/hooks/useMutation";
import { GraphQLErrorType } from "src/types/GraphQLErrorType";

const useUpdateComment = (
    options?: UseMutationOptions<
        UpdateCommentMutation,
        GraphQLErrorType,
        UpdateCommentMutationVariables
    >
) => {
    return useMutation<UpdateCommentMutation, UpdateCommentMutationVariables>({
        queryKey: ["UpdateComment"],
        query: gql`
            mutation UpdateComment($commentId: uuid!, $content: String!) {
                update_comments_by_pk(
                    pk_columns: { commentId: $commentId }
                    _set: { content: $content }
                ) {
                    postId
                }
            }
        `,
        options,
    });
};

export default useUpdateComment;
