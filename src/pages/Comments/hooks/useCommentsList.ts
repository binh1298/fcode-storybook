import { gql } from "graphql-request";
import { useQuery } from "react-query";
import { GetCommentsQuery, GetCommentsQueryVariables } from "src/generated/graphql";

import useQueryClient from "src/hooks/useQueryClient";

const useCommentsList = (postId: string) => {
    const queryClient = useQueryClient();

    const result = useQuery<GetCommentsQuery, unknown>(["GetComments"], async () => {
        const result = await queryClient.request<GetCommentsQuery, GetCommentsQueryVariables>(
            gql`
                query GetComments($postId: uuid!) {
                    posts_by_pk(postId: $postId) {
                        comments(order_by: { createdAt: asc }) {
                            commentId
                            content
                            createdAt
                            user {
                                avatar
                                name
                            }
                        }
                    }
                }
            `,
            { postId }
        );

        return result;
    });

    return result;
};

export default useCommentsList;
