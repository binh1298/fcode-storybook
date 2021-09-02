import { gql } from "graphql-request";
import { useQuery } from "react-query";
import { GetPostDetailPageQuery, GetPostDetailPageQueryVariables } from "src/generated/graphql";

import useQueryClient from "src/hooks/useQueryClient";

const usePostDetailPage = (postId: string) => {
    const queryClient = useQueryClient();

    const result = useQuery<GetPostDetailPageQuery>(
        ["GetPostDetailPage"],
        async () => {
            const result = await queryClient.request<
                GetPostDetailPageQuery,
                GetPostDetailPageQueryVariables
            >(
                gql`
                    query GetPostDetailPage($postId: uuid!) {
                        posts(where: { postId: { _eq: $postId } }) {
                            title
                            postId
                            content
                            createdAt
                            user {
                                avatar
                                name
                            }
                        }
                    }
                `,
                { postId }
            );

            return result;
        },
        {
            retry: false,
        }
    );

    return result;
};

export default usePostDetailPage;
