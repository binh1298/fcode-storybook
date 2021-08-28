import { gql } from "graphql-request";
import { useMutation } from "react-query";

import {
    UpdatePostByIdMutationMutation,
    UpdatePostByIdMutationMutationVariables,
} from "./../../../generated/graphql";

import useQueryClient from "src/hooks/useQueryClient";

const useUpdatePost = (refetchPosts: () => void, successUpdate: () => void) => {
    const queryClient = useQueryClient();

    const result = useMutation<
        UpdatePostByIdMutationMutation,
        unknown,
        UpdatePostByIdMutationMutationVariables
    >(
        ["UpdatePostOneMutation"],
        async (variable) => {
            const result = await queryClient.request<
                UpdatePostByIdMutationMutation,
                UpdatePostByIdMutationMutationVariables
            >(
                gql`
                    mutation UpdatePostByIDMutation(
                        $postId: uuid!
                        $content: String!
                        $title: String!
                    ) {
                        update_posts_by_pk(
                            pk_columns: { postId: $postId }
                            _set: { content: $content, title: $title }
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
                refetchPosts();
            },
        }
    );
    return result;
};

export default useUpdatePost;
