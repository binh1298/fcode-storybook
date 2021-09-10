import { gql } from "graphql-request";
import { useQuery } from "react-query";
import { GetPostDetailQuery, GetPostDetailQueryVariables } from "src/generated/graphql";

import useQueryClient from "src/hooks/useQueryClient";

const usePostDetailPage = (postId: string) => {
    const queryClient = useQueryClient();

    const result = useQuery<GetPostDetailQuery>(["GetPostDetail", postId], async () => {
        const result = await queryClient.request<GetPostDetailQuery, GetPostDetailQueryVariables>(
            gql`
                query GetPostDetail($postId: uuid!) {
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
    });

    return result;
};

export default usePostDetailPage;
