import { gql } from "graphql-request";
import { useQuery } from "react-query";
import {
    GetUsersWithPagingQueryQuery,
    GetUsersWithPagingQueryQueryVariables,
} from "src/generated/graphql";

import useQueryClient from "src/hooks/useQueryClient";

const useGetUser = (limit: number = 1, offset: number = 0, _ilike: string = "%%") => {
    const queryClient = useQueryClient();
    const result = useQuery(["GetUsersWithPagingQuery", limit, offset, _ilike], async () => {
        const result = await queryClient.request<
            GetUsersWithPagingQueryQuery,
            GetUsersWithPagingQueryQueryVariables
        >(
            gql`
                query GetUsersWithPagingQuery(
                    $offset: Int = 0
                    $limit: Int = 10
                    $_ilike: String = ""
                ) {
                    users(offset: $offset, limit: $limit, where: { email: { _ilike: $_ilike } }) {
                        email
                        name
                        avatar
                        role
                        userId
                        isActive
                    }
                }
            `,
            { limit, offset, _ilike }
        );
        return result;
    });
    return result;
};

export default useGetUser;
