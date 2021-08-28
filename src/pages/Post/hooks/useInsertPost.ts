import { gql } from "graphql-request";
import { useMutation } from "react-query";

import { InsertPostMutation, InsertPostMutationVariables } from "./../../../generated/graphql";

import useQueryClient from "src/hooks/useQueryClient";

const useInsertPost = (refectPosts: () => void) => {
    const queryClient = useQueryClient();
    const result = useMutation<InsertPostMutation, unknown, InsertPostMutationVariables>(
        ["InsertPost"],
        async (variable) => {
            const result = await queryClient.request<
                InsertPostMutation,
                InsertPostMutationVariables
            >(
                gql`
                    mutation InsertPost($authorId: uuid!, $content: String!, $title: String!) {
                        insert_posts_one(
                            object: { authorId: $authorId, content: $content, title: $title }
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
                refectPosts();
            },
        }
    );
    return result;
};
export default useInsertPost;
