import { gql } from "graphql-request";
import { useMutation } from "react-query";

// import { DeletePostMutation, DeletePostMutationVariables } from "src/generated/graphql";
import useQueryClient from "src/hooks/useQueryClient";

const useDeletePost = (refectPosts: () => void) => {
    const queryClient = useQueryClient();
    const result = useMutation(
        ["DeletePost"],
        async (variable) => {
            const result = await queryClient.request(
                gql`
                    mutation DeletePost($postId: uuid!) {
                        delete_posts_by_pk(postId: $postId) {
                            authorId
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

export default useDeletePost;
