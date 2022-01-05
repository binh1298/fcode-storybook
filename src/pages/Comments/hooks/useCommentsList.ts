import { gql } from "graphql-request";
import { UseQueryOptions } from "react-query";
import { GetCommentsListQuery, GetCommentsListQueryVariables } from "src/generated/graphql";

import useQuery from "src/hooks/useQuery";
import { GraphQLErrorType } from "src/types/GraphQLErrorType";

const useCommentsList = ({
    options,
    variables,
}: {
    options?: UseQueryOptions<GetCommentsListQuery, GraphQLErrorType>;
    variables?: GetCommentsListQueryVariables;
}) => {
    return useQuery<GetCommentsListQuery, GetCommentsListQueryVariables>({
        queryKey: ["GetCommentsList", variables],
        query: gql`
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
        variables,
        options,
    });
};

export default useCommentsList;
