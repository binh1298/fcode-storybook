import { gql } from "graphql-request";
import { useMutation } from "react-query";
import { DeleteCommentMutation, DeleteCommentMutationVariables } from "src/generated/graphql";

import useQueryClient from "src/hooks/useQueryClient";

const useDeleteComment = (refetchComments: () => void) => {
    const queryClient = useQueryClient();

    const result = useMutation<DeleteCommentMutation, unknown, DeleteCommentMutationVariables>(
        ["DeleteComment"],
        async (variable) => {
            const result = await queryClient.request<
                DeleteCommentMutation,
                DeleteCommentMutationVariables
            >(
                gql`
                    mutation DeleteComment($commentId: uuid!) {
                        delete_comments_by_pk(commentId: $commentId) {
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

export default useDeleteComment;
