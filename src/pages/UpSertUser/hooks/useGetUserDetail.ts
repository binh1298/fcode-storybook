import { gql } from "graphql-request";
import { UseQueryOptions } from "react-query";
import { GetUserDetailQuery, GetUserDetailQueryVariables } from "src/generated/graphql";

import useQuery from "src/hooks/useQuery";
import { GraphQLErrorType } from "src/types/GraphQLErrorType";

const useGetUserDetail = ({
    options,
    variables,
}: {
    options?: UseQueryOptions<GetUserDetailQuery, GraphQLErrorType>;
    variables?: GetUserDetailQueryVariables;
}) => {
    return useQuery<GetUserDetailQuery, GetUserDetailQueryVariables>({
        queryKey: ["GetUserDetail", variables],
        query: gql`
            query GetUserDetail($userId: uuid!) {
                users_by_pk(userId: $userId) {
                    avatar
                    email
                    isActive
                    role
                    userId
                    name
                }
            }
        `,
        variables,
        options,
    });
};

export default useGetUserDetail;
