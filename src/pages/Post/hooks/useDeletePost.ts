import { gql } from "graphql-request";
import { UseMutationOptions } from "react-query";
import { DeletePostMutation, DeletePostMutationVariables } from "src/generated/graphql";

import useMutation from "src/hooks/useMutation";
import { GraphQLErrorType } from "src/types/GraphQLErrorType";

const useDeletePost = (
    options?: UseMutationOptions<DeletePostMutation, GraphQLErrorType, DeletePostMutationVariables>
) => {
    return useMutation<DeletePostMutation, DeletePostMutationVariables>({
        queryKey: ["DeletePost"],
        query: gql`
            mutation DeletePost($postId: uuid!) {
                delete_posts_by_pk(postId: $postId) {
                    deletedAt
                }
            }
        `,
        options,
    });
};

export default useDeletePost;
