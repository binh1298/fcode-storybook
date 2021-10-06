import { gql } from "graphql-request";
import { UseMutationOptions } from "react-query";
import { UpdatePostByIdMutation, UpdatePostByIdMutationVariables } from "src/generated/graphql";

import useMutation from "src/hooks/useMutation";
import { GraphQLErrorType } from "src/types/GraphQLErrorType";

const useUpdatePost = (
    options?: UseMutationOptions<
        UpdatePostByIdMutation,
        GraphQLErrorType,
        UpdatePostByIdMutationVariables
    >,
    variables?: UpdatePostByIdMutationVariables
) => {
    return useMutation<UpdatePostByIdMutation, UpdatePostByIdMutationVariables>({
        queryKey: ["UpdatePostById", variables],
        query: gql`
            mutation UpdatePostByID($postId: uuid!, $content: String!, $title: String!) {
                update_posts_by_pk(
                    pk_columns: { postId: $postId }
                    _set: { content: $content, title: $title }
                ) {
                    postId
                }
            }
        `,
        options,
    });
};

export default useUpdatePost;
