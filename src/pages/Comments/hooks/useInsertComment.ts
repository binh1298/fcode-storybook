import { gql } from "graphql-request";
import { useMutation } from "react-query";
import { InsertCommentMutation, InsertCommentMutationVariables } from "src/generated/graphql";

import useQueryClient from "src/hooks/useQueryClient";

const useInsertComment = (refetchComments: () => void) => {
    const queryClient = useQueryClient();

    const result = useMutation<InsertCommentMutation, Error, InsertCommentMutationVariables>(
        ["InsertComment"],
        async (variable) => {
            const result = await queryClient.request<
                InsertCommentMutation,
                InsertCommentMutationVariables
            >(
                gql`
                    mutation InsertComment(
                        $authorId: uuid = ""
                        $postId: uuid = ""
                        $content: String = ""
                    ) {
                        insert_comments_one(
                            object: { authorId: $authorId, postId: $postId, content: $content }
                        ) {
                            commentId
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

export default useInsertComment;
