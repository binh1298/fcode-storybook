import { gql } from "graphql-request";
import { UseMutationOptions } from "react-query";
import { InsertCommentMutation, InsertCommentMutationVariables } from "src/generated/graphql";

import useMutation from "src/hooks/useMutation";

const useInsertComment = (
    options?: UseMutationOptions<InsertCommentMutation, unknown, InsertCommentMutationVariables>
) => {
    return useMutation<InsertCommentMutation, InsertCommentMutationVariables>({
        queryKey: ["InsertComment"],
        query: gql`
            mutation InsertComment($authorId: uuid!, $postId: uuid!, $content: String!) {
                insert_comments_one(
                    object: { authorId: $authorId, postId: $postId, content: $content }
                ) {
                    commentId
                }
            }
        `,
        options,
    });
};

export default useInsertComment;
