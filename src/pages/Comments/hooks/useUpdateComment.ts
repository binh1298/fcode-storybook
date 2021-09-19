import { gql } from "graphql-request";
import { useMutation } from "react-query";
import { UpdateCommentMutation, UpdateCommentMutationVariables } from "src/generated/graphql";

import useQueryClient from "src/hooks/useQueryClient";

const useUpdateComment = (refetchComments: () => void) => {
    const queryClient = useQueryClient();

    const result = useMutation<UpdateCommentMutation, unknown, UpdateCommentMutationVariables>(
        ["UpdateComment"],
        async (variable) => {
            const result = await queryClient.request<
                UpdateCommentMutation,
                UpdateCommentMutationVariables
            >(
                gql`
                    mutation UpdateComment($commentId: uuid!, $content: String!) {
                        update_comments_by_pk(
                            pk_columns: { commentId: $commentId }
                            _set: { content: $content }
                        ) {
                            postId
                        }
                    }
                `,
                variable
            );
            return result;
        },
        {
            onSuccess: () => {
                refetchComments();
            },
        }
    );
    return result;
};

export default useUpdateComment;
