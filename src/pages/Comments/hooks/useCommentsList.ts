import { gql } from "graphql-request";
import { useQuery } from "react-query";
import { GetCommentsListQuery, GetCommentsListQueryVariables } from "src/generated/graphql";

import useQueryClient from "src/hooks/useQueryClient";

const useCommentsList = (postId: string) => {
    const queryClient = useQueryClient();

    const result = useQuery<GetCommentsListQuery>(["GetCommentsList", postId], async () => {
        const result = await queryClient.request<
            GetCommentsListQuery,
            GetCommentsListQueryVariables
        >(
            gql`
                query GetCommentsList($postId: uuid!) {
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
