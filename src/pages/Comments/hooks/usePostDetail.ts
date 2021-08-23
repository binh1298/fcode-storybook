import { gql } from "graphql-request";
import { useQuery } from "react-query";
import { GetPostDetailQuery, GetPostDetailQueryVariables } from "src/generated/graphql";

import useQueryClient from "src/hooks/useQueryClient";

const usePostDetail = (postId: string) => {
    const queryClient = useQueryClient();

    const result = useQuery<GetPostDetailQuery, { message: string }>(
        ["GetPostDetail"],
        async () => {
            const result = await queryClient.request<
                GetPostDetailQuery,
                GetPostDetailQueryVariables
            >(
                gql`
                    query GetPostDetail($postId: uuid = "") {
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

export default usePostDetail;
