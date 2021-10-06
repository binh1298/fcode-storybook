import { gql } from "graphql-request";
import { UseMutationOptions } from "react-query";
import { InsertPostMutation, InsertPostMutationVariables } from "src/generated/graphql";

import useMutation from "src/hooks/useMutation";
import { GraphQLErrorType } from "src/types/GraphQLErrorType";

const useInsertPost = (
    options?: UseMutationOptions<InsertPostMutation, GraphQLErrorType, InsertPostMutationVariables>,
    variables?: InsertPostMutationVariables
) => {
    return useMutation<InsertPostMutation, InsertPostMutationVariables>({
        queryKey: ["InsertPost", variables],
        query: gql`
            mutation InsertPost($authorId: uuid!, $content: String!, $title: String!) {
                insert_posts_one(
                    object: { authorId: $authorId, content: $content, title: $title }
                ) {
                    postId
                }
            }
        `,
        options,
    });
};

export default useInsertPost;
