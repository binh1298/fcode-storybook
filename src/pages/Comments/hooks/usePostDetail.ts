import { gql } from "graphql-request";
import { UseQueryOptions } from "react-query";
import { GetPostDetailQuery, GetPostDetailQueryVariables } from "src/generated/graphql";

import useQuery from "src/hooks/useQuery";
import { GraphQLErrorType } from "src/types/GraphQLErrorType";

const usePostDetailPage = ({
    options,
    variables,
}: {
    options?: UseQueryOptions<GetPostDetailQuery, GraphQLErrorType>;
    variables?: GetPostDetailQueryVariables;
}) => {
    return useQuery<GetPostDetailQuery, GetPostDetailQueryVariables>({
        queryKey: ["GetPostDetail", variables],
        query: gql`
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
        variables,
        options,
    });
};

export default usePostDetailPage;
