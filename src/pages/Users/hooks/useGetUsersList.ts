import { gql } from "graphql-request";
import { UseQueryOptions } from "react-query";
import { GetUsersListQuery, GetUsersListQueryVariables } from "src/generated/graphql";

import useQuery from "src/hooks/useQuery";
import { GraphQLErrorType } from "src/types/GraphQLErrorType";

const useGetUsersList = ({
    options,
    variables,
}: {
    options?: UseQueryOptions<GetUsersListQuery, GraphQLErrorType>;
    variables?: GetUsersListQueryVariables;
}) => {
    return useQuery<GetUsersListQuery, GetUsersListQueryVariables>({
        queryKey: ["GetUsersList"],
        query: gql`
            query GetUsersList($offset: Int = 0, $limit: Int = 10, $_ilike: String = "") {
                users(
                    offset: $offset
                    limit: $limit
                    where: { email: { _ilike: $_ilike } }
                    order_by: { email: asc }
                ) {
                    email
                    name
                    avatar
                    role
                    userId
                    isActive
                }
            }
        `,
        variables,
        options,
    });
};

export default useGetUsersList;
